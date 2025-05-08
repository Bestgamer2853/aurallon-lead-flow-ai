
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, CheckCheck } from 'lucide-react';

interface ChatMockupProps {
  platform: 'whatsapp' | 'telegram' | 'slack';
  className?: string;
}

const ChatMockup: React.FC<ChatMockupProps> = ({ platform, className }) => {
  // Platform-specific styling and icons
  const platformConfig = {
    whatsapp: {
      bgColor: 'bg-[#075E54]',
      lightBg: 'bg-[#DCF8C6]',
      darkBg: 'bg-white',
      userBg: 'bg-[#E2FFC7]',
      botBg: 'bg-white',
      iconColor: 'text-white',
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'WhatsApp',
      messages: [
        { sender: 'user', text: "Hi there! I'm interested in properties in the Downtown area. Do you have any new listings?" },
        { sender: 'bot', text: "Hello! I'm the Aurallon AI assistant. Yes, we have 5 new listings in Downtown added this week. Would you like to see properties in a specific price range?" },
        { sender: 'user', text: "I'm looking in the $500K-700K range for a 2BR condo." },
        { sender: 'bot', text: "Great! I've found 3 properties matching your criteria. Would you like to schedule a viewing with one of our agents this week?" },
        { sender: 'user', text: "Yes, I'd be available Thursday afternoon." },
        { sender: 'bot', text: "Perfect! I've scheduled a viewing with Sarah on Thursday at 2 PM. You'll receive a calendar invite shortly. Can I help with anything else?" }
      ]
    },
    telegram: {
      bgColor: 'bg-[#2AABEE]',
      lightBg: 'bg-[#F0F2F5]',
      darkBg: 'bg-white',
      userBg: 'bg-[#E3F2FD]',
      botBg: 'bg-white',
      iconColor: 'text-white',
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Telegram',
      messages: [
        { sender: 'user', text: "Hello, I saw your ad for luxury apartments. What's currently available?" },
        { sender: 'bot', text: "Welcome to Aurallon Real Estate! We specialize in luxury properties. Are you looking to buy or rent?" },
        { sender: 'user', text: "Looking to buy, preferably something with a view." },
        { sender: 'bot', text: "We have 3 premium properties with spectacular views. Based on your interest, would you prefer a waterfront or city skyline view?" },
        { sender: 'user', text: "Waterfront would be amazing!" },
        { sender: 'bot', text: "Excellent choice! Our Harbor Heights property just listed at $1.2M has floor-to-ceiling windows with stunning bay views. Would you like to book a private tour?" }
      ]
    },
    slack: {
      bgColor: 'bg-[#4A154B]',
      lightBg: 'bg-[#F8F8F8]',
      darkBg: 'bg-white',
      userBg: 'bg-white border border-gray-200',
      botBg: 'bg-white border border-gray-200',
      iconColor: 'text-white',
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Slack',
      messages: [
        { sender: 'user', text: "Hi, I'm relocating for work and need to find a home quickly. Can you help?" },
        { sender: 'bot', text: "Hi there! I'd be happy to help with your relocation. To better assist you, could you share which area you're relocating to and your timeline?" },
        { sender: 'user', text: "Moving to Riverdale district in 6 weeks. Need a 3BR family home under $850K." },
        { sender: 'bot', text: "Thanks for the details! I've found 4 family homes in Riverdale that match your criteria. The market moves quickly there, so I recommend scheduling viewings soon. Would you prefer weekday or weekend appointments?" },
        { sender: 'user', text: "Weekend would be better for me." },
        { sender: 'bot', text: "I've reserved spots with our Riverdale specialist this Saturday at 10 AM and 2 PM. Would you like me to confirm either time slot for you?" }
      ]
    }
  };

  const config = platformConfig[platform];

  return (
    <div className={cn("rounded-xl overflow-hidden shadow-lg w-full max-w-xs mx-auto bg-white", className)}>
      {/* Header */}
      <div className={cn("p-3 flex items-center", config.bgColor)}>
        <div className="mr-3">
          {config.icon}
        </div>
        <div className="text-white font-medium">{config.title}</div>
      </div>
      
      {/* Chat body */}
      <div className="h-80 overflow-y-auto p-3 bg-gray-100 flex flex-col gap-3">
        {config.messages.map((message, index) => (
          <div 
            key={index}
            className={cn(
              "p-2 rounded-lg max-w-[85%]",
              message.sender === 'user' 
                ? "self-end " + config.userBg
                : "self-start " + config.botBg
            )}
          >
            <p className="text-sm">{message.text}</p>
            {message.sender === 'user' && (
              <div className="flex justify-end mt-1">
                <CheckCheck className="h-3 w-3 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMockup;
