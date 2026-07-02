import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  links?: Array<{ text: string; url: string }>;
  isSystemMessage?: boolean;
}

const INACTIVITY_TIMEOUT = 25000; // 25 seconds for triggering inactivity check
const STORAGE_KEY = "gautam_chat_history";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUserMessageTimeRef = useRef<number>(Date.now());

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(
          parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }))
        );
      } catch (error) {
        console.error("Failed to parse chat history:", error);
        initializeChat();
      }
    } else {
      initializeChat();
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Reset inactivity timer when chat is open
  useEffect(() => {
    if (!isOpen || isClosed) {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      return;
    }

    // Set up inactivity check
    const setupInactivityTimer = () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      inactivityTimeoutRef.current = setTimeout(() => {
        const timeSinceLastMessage = Date.now() - lastUserMessageTimeRef.current;
        if (timeSinceLastMessage >= INACTIVITY_TIMEOUT) {
          addBotMessage(
            "Do you still need any assistance? Let me know if you have any other questions! 😊",
            true
          );
        }
      }, INACTIVITY_TIMEOUT);
    };

    setupInactivityTimer();

    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [isOpen, isClosed, messages]);

  const initializeChat = () => {
    const initialMessage: Message = {
      id: "1",
      text: "Hello! 👋 I'm here to help with any questions about Gautam & Associates. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  };

  const addBotMessage = (text: string, isSystemMessage = false) => {
    const botMessage: Message = {
      id: (Date.now() + Math.random()).toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
      isSystemMessage,
    };
    setMessages((prev) => [...prev, botMessage]);
    return botMessage;
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    lastUserMessageTimeRef.current = Date.now();

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const extractedText =
        data.response || "I couldn't process that. Please try again.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: extractedText,
        sender: "bot",
        timestamp: new Date(),
        links: data.links,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, I encountered an error. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleYesResponse = () => {
    lastUserMessageTimeRef.current = Date.now();
    addBotMessage(
      "Great! Feel free to ask me anything else about our services, projects, or team. How can I help you further? 😊"
    );
  };

  const handleNoResponse = () => {
    addBotMessage(
      "Thank you for contacting Gautam & Associates! 🙏 We appreciate your interest. If you have any more questions in the future, feel free to reach out. Have a great day! 👋"
    );
    setTimeout(() => {
      setIsClosed(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosed(false);
      }, 3000);
    }, 2000);
  };

  const clearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    initializeChat();
    lastUserMessageTimeRef.current = Date.now();
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      {!isOpen && !isClosed && (
        <button
          onClick={() => {
            setIsOpen(true);
            setHasUnread(false);
          }}
          className="fixed bottom-8 right-8 z-[999] w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 flex items-center justify-center group relative"
          style={{ position: "fixed", bottom: "32px", right: "32px" }}
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          {hasUnread && (
            <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && !isClosed && (
        <div
          className="fixed z-[999] w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300"
          style={{ position: "fixed", bottom: "32px", right: "32px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Gautam Assistant</h3>
              <p className="text-sm text-amber-100">Always here to help</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                title="Clear chat history"
                className="p-1 hover:bg-white/20 rounded-lg transition-colors text-xs"
              >
                🔄
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-amber-600 text-white rounded-br-none"
                      : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium py-2 px-3 rounded text-center transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                  {msg.isSystemMessage && (
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={handleYesResponse}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-2 rounded transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleNoResponse}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium py-1 px-2 rounded transition-colors"
                      >
                        No
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 p-4 bg-white flex gap-2"
          >
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 border-gray-300 focus:border-amber-600 focus:ring-amber-600"
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg p-2 h-10 w-10"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
