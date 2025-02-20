import React, { useState } from "react";
import {Search, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useNavigate, useParams } from "react-router-dom";
import TopEvents from "../components/TopEvents";
import OtherArticles from "../components/OtherArticles";
import Categories from "../components/Categories";

const topArticles = [
    {
      title: "Breaking News: Market Crash",
      excerpt: {
        Who: "Stock market investors, financial analysts, government regulators",
        Where: "Global stock exchanges, including Wall Street and European markets",
        What: "Major stock market indices saw a sharp decline due to economic concerns",
        How: "A combination of rising interest rates, inflation fears, and global instability led to massive sell-offs",
        Implication: "Investors face significant losses, and financial markets are bracing for further volatility",
        Context: "This downturn follows weeks of instability in financial markets amid global economic uncertainty"
      },
      category: "Business",
      eventName: "Global Financial Summit",
      publishedAgo: "2 hours ago",
      likes: 120,
      comments: 30,
      dislikes: 15,
      imageUrl: "https://img.freepik.com/free-photo/business-team-discussing-market_1122-1878.jpg"
    },
    {
      title: "Investors React to Market Crash",
      excerpt: {
        Who: "Stockholders, economists, hedge fund managers",
        Where: "Wall Street, Asian and European markets",
        What: "A wave of investor panic followed the sharp decline in stock prices",
        How: "Hedge funds adjusted portfolios, and central banks made emergency statements",
        Implication: "Long-term impact on pension funds and institutional investors",
        Context: "A domino effect is expected across global economies in the coming months"
      },
      category: "Business",
      eventName: "Global Financial Summit",
      publishedAgo: "5 hours ago",
      likes: 95,
      comments: 20,
      dislikes: 10,
      imageUrl: "https://img.freepik.com/free-photo/financial-crisis-market-downturn_1122-1878.jpg"
    },
    {
      title: "Central Banks Respond to Economic Turmoil",
      excerpt: {
        Who: "Federal Reserve, European Central Bank, global financial leaders",
        Where: "International finance meetings",
        What: "Governments discuss strategies to stabilize the economy",
        How: "Policy adjustments, interest rate reviews, and financial stimulus measures",
        Implication: "Possibility of an economic recession in major economies",
        Context: "Previous interventions had mixed success in managing economic downturns"
      },
      category: "Business",
      eventName: "Global Financial Summit",
      publishedAgo: "1 day ago",
      likes: 110,
      comments: 25,
      dislikes: 8,
      imageUrl: "https://img.freepik.com/free-photo/finance-meeting-banking-strategy_1122-1878.jpg"
    },
  
    // AI Tech Conference 2025
    {
      title: "Future of AI: Experts Share Insights",
      excerpt: {
        Who: "AI researchers, tech CEOs, policymakers",
        Where: "AI Tech Conference 2025",
        What: "Panel discussion on AI ethics, innovation, and business applications",
        How: "Experts debated over regulations and future job automation",
        Implication: "Shift towards AI governance and human-AI collaboration",
        Context: "AI legislation is becoming a global priority"
      },
      category: "Technology",
      eventName: "AI Tech Conference 2025",
      publishedAgo: "6 hours ago",
      likes: 180,
      comments: 45,
      dislikes: 12,
      imageUrl: "https://img.freepik.com/free-photo/ai-tech-conference-speakers_1122-1878.jpg"
    },
    {
      title: "AI Startups Showcase Breakthroughs",
      excerpt: {
        Who: "Innovative AI startups, venture capitalists",
        Where: "Tech startup expo at AI Tech Conference 2025",
        What: "New AI-powered tools showcased, from automation to cybersecurity",
        How: "Deep learning models, quantum AI computing, and real-world applications",
        Implication: "Significant investment interest in emerging AI startups",
        Context: "Big tech firms are acquiring promising AI startups at a fast pace"
      },
      category: "Technology",
      eventName: "AI Tech Conference 2025",
      publishedAgo: "10 hours ago",
      likes: 230,
      comments: 60,
      dislikes: 20,
      imageUrl: "https://img.freepik.com/free-photo/startup-ai-demo-2025_1122-1878.jpg"
    },
    {
      title: "Tech Leaders Debate AI Regulations",
      excerpt: {
        Who: "Global tech CEOs, government officials",
        Where: "AI Tech Conference 2025 - Ethics & Policy Session",
        What: "Discussions on AI regulations and ethical boundaries",
        How: "Proposed frameworks for AI safety and transparency",
        Implication: "Tighter restrictions may slow innovation, but ensure ethical AI use",
        Context: "Governments are pushing for AI laws amid privacy and bias concerns"
      },
      category: "Technology",
      eventName: "AI Tech Conference 2025",
      publishedAgo: "1 day ago",
      likes: 150,
      comments: 35,
      dislikes: 10,
      imageUrl: "https://img.freepik.com/free-photo/ai-ethics-panel-discussion_1122-1878.jpg"
    },
  
    // National Sports Championship
    {
      title: "Championship Finals: A Thrilling Finish",
      excerpt: {
        Who: "Top-tier teams, sports analysts",
        Where: "National stadium",
        What: "One of the closest championship finals in recent years",
        How: "Overtime battle, last-minute goals, and intense competition",
        Implication: "Team spirit and talent showcased at the highest level",
        Context: "This season saw record-breaking performances"
      },
      category: "Sports",
      eventName: "National Sports Championship",
      publishedAgo: "8 hours ago",
      likes: 220,
      comments: 70,
      dislikes: 18,
      imageUrl: "https://img.freepik.com/free-photo/sports-championship-final-2025_1122-1878.jpg"
    },
    {
      title: "MVP of the Tournament Announced",
      excerpt: {
        Who: "Star athletes, award committee",
        Where: "Championship ceremony",
        What: "Top player awarded MVP title for outstanding performance",
        How: "Voted by sports journalists and fans worldwide",
        Implication: "MVP's future in professional leagues looks promising",
        Context: "This year’s championship attracted global attention"
      },
      category: "Sports",
      eventName: "National Sports Championship",
      publishedAgo: "12 hours ago",
      likes: 175,
      comments: 50,
      dislikes: 14,
      imageUrl: "https://img.freepik.com/free-photo/mvp-award-ceremony_1122-1878.jpg"
    },
    {
      title: "Fans Celebrate Historic Victory",
      excerpt: {
        Who: "Fans, players, coaches",
        Where: "City streets, sports bars, online forums",
        What: "Massive celebrations after a dramatic championship win",
        How: "Parades, social media trends, and record viewership numbers",
        Implication: "Boost in sports merchandise sales and fan engagement",
        Context: "The winning team was an underdog at the start of the season"
      },
      category: "Sports",
      eventName: "National Sports Championship",
      publishedAgo: "1 day ago",
      likes: 140,
      comments: 38,
      dislikes: 9,
      imageUrl: "https://img.freepik.com/free-photo/fans-celebrating-sports-win_1122-1878.jpg"
    }
  ];
  

// Extract unique event names
const eventNames = [...new Set(topArticles.map((article) => article.eventName))];

const Hero = () => {
  const [visibleArticles, setVisibleArticles] = useState(10);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [selectedArticles, setSelectedArticles] = useState({});
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle event dropdown
  const toggleEventDropdown = (eventName) => {
    setExpandedEvents((prev) => {
      const isCurrentlyExpanded = prev[eventName];
  
      // If closing the dropdown, reset selections for that event
      if (isCurrentlyExpanded) {
        setSelectedArticles((prevSelected) => ({
          ...prevSelected,
          [eventName]: {},
        }));
      } else {
        // If opening, prefill selections for all articles under this event
        setSelectedArticles((prevSelected) => ({
          ...prevSelected,
          [eventName]: topArticles
            .filter((article) => article.eventName === eventName)
            .reduce((acc, article) => {
              acc[article.title] = true;
              return acc;
            }, {}),
        }));
      }
  
      return { ...prev, [eventName]: !isCurrentlyExpanded };
    });
  };
  
  

  // Handle checkbox change
  const handleCheckboxChange = (eventName, title) => {
    setSelectedArticles((prev) => ({
      ...prev,
      [eventName]: {
        ...prev[eventName],
        [title]: !prev[eventName]?.[title],
      },
    }));
  };

  // Filter articles based on category and selected checkboxes
  let filteredArticles =
    selectedCategory === "All"
      ? topArticles
      : topArticles.filter((article) => article.category === selectedCategory);

  // If any checkboxes are selected, filter articles accordingly
  const selectedTitles = Object.values(selectedArticles)
    .flatMap((event) => Object.entries(event))
    .filter(([_, isChecked]) => isChecked)
    .map(([title]) => title);

  if (selectedTitles.length > 0) {
    filteredArticles = filteredArticles.filter((article) => selectedTitles.includes(article.title));
  }

  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on search query
  const filteredEvents = eventNames.filter(event => 
    event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Categories Section */}
      <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

    <div className="flex p-4 gap-4">

      
      {/* Sidebar with Event Filters */}
      <aside className="w-1/4 p-4 rounded-lg sticky top-4 h-[75vh] overflow-y-auto border border-gray-300 scrollbar-hide">
        <h2 className="text-xl font-semibold mb-3">Search Events</h2>

        {/* Search Bar */}
      <div className="relative mb-3">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
      </div>


        <ul className="space-y-2">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((eventName, index) => (
            <li key={index} className="border-b pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                onClick={() => toggleEventDropdown(eventName)}
              >
                <span>{eventName}</span>
                {expandedEvents[eventName] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              
              {expandedEvents[eventName] && (
                <ul className="ml-4 mt-2 space-y-1">
                  {topArticles
                    .filter((article) => article.eventName === eventName)
                    .map((article, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedArticles[eventName]?.[article.title] || false}
                          onChange={() => handleCheckboxChange(eventName, article.title)}
                        />
                        <span>{article.title}</span>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm italic">No events found.</p>
        )}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 flex flex-col gap-4 overflow-y-auto h-[90vh] scrollbar-hide">
        
        {/* Top News Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            {/* 🔥 */}
             {category ? `${category} News` : "Top News"}
          </h2>
          <div className="flex flex-wrap gap-5">
            {filteredArticles.slice(0, visibleArticles).map((article, index) => (
              <Card key={index}>
                <CardContent {...article} />
              </Card>
            ))}
          </div>
          {filteredArticles.length > visibleArticles && (
            <button 
              onClick={() => setVisibleArticles((prev) => prev + 5)} 
              className="mt-6 font-semibold p-2 rounded-lg border flex hover:bg-gray-100 transition"
            >
              Load More <ChevronDown />
            </button>
          )}
        </section>

        {/* Top Events Section */}
        <section className="relative w-full mt-6">
          <h2 className="text-2xl font-semibold mb-3">Top Events</h2>
          <TopEvents />
        </section>

        {/* Other Articles Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Other Articles</h2>
          <OtherArticles />
        </section>
        
      </main>
    </div>
    </div>
  );
};

export default Hero;
