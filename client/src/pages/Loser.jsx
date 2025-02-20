import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useNavigate, useParams } from "react-router-dom";
import TopEvents from "../components/TopEvents";
import OtherArticles from "../components/OtherArticles";

const topArticles = [
    {
      title: "Breaking News: Market Crash",
      content: "Global stock markets experienced a sharp downturn today, with major indices witnessing significant declines. Investors reacted negatively to rising interest rates, inflation concerns, and geopolitical uncertainties. Wall Street saw a record-breaking sell-off, while European and Asian markets followed suit. Financial analysts have attributed this crash to central banks tightening monetary policies and fears of an economic recession. Government regulators are assessing potential interventions to stabilize markets. Experts predict that this downturn could lead to long-term economic implications, affecting pension funds and investment portfolios worldwide. Many hedge funds and institutional investors have adjusted their portfolios to mitigate losses. In response, central banks are expected to review policies in the coming weeks. Meanwhile, retail investors are urged to remain cautious amid market volatility. Economists warn that if inflation remains high and interest rates continue to rise, further losses may be inevitable. This market crash has revived debates on economic stability and the effectiveness of current financial regulations. More updates are expected as the situation unfolds, with government officials and financial experts scheduled to meet at the upcoming Global Financial Summit to discuss potential recovery measures.",
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
      content: "Following the recent market crash, investors worldwide are grappling with financial uncertainty. Wall Street traders, economists, and hedge fund managers have taken swift actions to mitigate losses. Panic selling dominated the markets, pushing stock values further down. Some analysts believe that this could be a short-term correction, while others warn of a prolonged economic downturn. Central banks have issued emergency statements, reassuring investors that they are monitoring the situation closely. Hedge funds have started restructuring their portfolios, shifting investments towards safer assets such as gold and government bonds. Financial experts suggest that individual investors should remain patient and avoid impulsive decisions. Meanwhile, governments are considering stimulus packages and policy adjustments to prevent further economic decline. Market experts predict that the upcoming Global Financial Summit will be crucial in determining future financial strategies. The effects of this crash extend beyond stock markets, impacting industries such as real estate, commodities, and cryptocurrency. The coming weeks will be critical in assessing whether global economies can recover swiftly or if this downturn signals a deeper financial crisis.",
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
      content: "In response to growing economic concerns, central banks around the world have convened emergency meetings to discuss potential interventions. The Federal Reserve, European Central Bank, and other global financial institutions are weighing options to stabilize the markets. Measures under consideration include adjusting interest rates, modifying monetary policies, and introducing financial stimulus programs. Economists fear that without swift action, the economy could spiral into a recession. Governments are closely monitoring inflation trends, supply chain disruptions, and employment data to assess the situation accurately. While some policymakers advocate for aggressive stimulus measures, others warn that excessive interventions could lead to further inflationary pressures. Investors are eagerly awaiting official announcements from financial authorities to gauge the potential impact on markets. The upcoming international finance summit is expected to play a crucial role in shaping economic strategies for the coming months. As uncertainty looms, businesses and consumers alike are bracing for potential shifts in economic policies that could redefine financial landscapes worldwide.",
      category: "Business",
      eventName: "Global Financial Summit",
      publishedAgo: "1 day ago",
      likes: 110,
      comments: 25,
      dislikes: 8,
      imageUrl: "https://img.freepik.com/free-photo/finance-meeting-banking-strategy_1122-1878.jpg"
    },
    {
        title: "Future of AI: Experts Share Insights",
        content: "At the AI Tech Conference 2025, leading researchers, tech CEOs, and policymakers gathered to discuss the rapid advancements in artificial intelligence and its implications on society. The panel focused on ethical AI development, responsible innovation, and the future of AI governance. Experts debated regulations to ensure AI benefits humanity while minimizing risks like job displacement and biased algorithms. Discussions also explored AI’s role in automation, healthcare, and finance, highlighting breakthroughs in machine learning and neural networks. Policymakers emphasized the need for global AI legislation, as major economies push for stricter compliance measures. The conference underscored the importance of transparency in AI decision-making and fostering collaboration between tech giants and governments to create a balanced AI ecosystem.",
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
        content: "The AI Tech Conference 2025 provided a platform for groundbreaking startups to showcase their latest AI-powered innovations. From automation tools to advanced cybersecurity solutions, emerging companies introduced cutting-edge applications designed to transform industries. Key highlights included demonstrations of deep learning models, the integration of quantum AI, and real-world applications of generative AI. Venture capitalists and investors showed strong interest in these startups, with several securing funding rounds during the event. Industry experts believe that AI startups will play a crucial role in shaping the next generation of technological advancements. The increasing trend of major tech firms acquiring innovative startups was also a key topic, raising discussions about market consolidation and competition in the AI space.",
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
        content: "A crucial discussion at the AI Tech Conference 2025 revolved around the pressing need for AI regulations. Global tech leaders, government officials, and legal experts debated how to strike a balance between fostering innovation and ensuring ethical AI use. With AI being increasingly integrated into critical sectors like healthcare, finance, and defense, the push for accountability and transparency has gained momentum. Several proposed frameworks included mandatory audits of AI algorithms, restrictions on AI in surveillance, and legal responsibilities for companies deploying high-risk AI systems. While some argued that tighter regulations could stifle innovation, others insisted that clear guidelines would ensure safer and fairer AI adoption. The debate highlighted growing concerns over AI bias, privacy, and the potential misuse of autonomous systems. Governments worldwide are now accelerating efforts to create AI laws that align with technological advancements while safeguarding human rights and security.",
        category: "Technology",
        eventName: "AI Tech Conference 2025",
        publishedAgo: "1 day ago",
        likes: 150,
        comments: 35,
        dislikes: 10,
        imageUrl: "https://img.freepik.com/free-photo/ai-ethics-panel-discussion_1122-1878.jpg"
      },
      {
        title: "Championship Finals: A Thrilling Finish",
        content: "The National Sports Championship 2025 delivered one of the most electrifying finals in recent years, leaving fans on the edge of their seats. The game, held at the national stadium, saw two powerhouse teams battle fiercely, with the match extending into overtime due to a dramatic last-minute goal. Analysts and commentators hailed the performance as one of the most competitive finals ever, showcasing high-level skill, strategy, and sportsmanship. The stadium roared as the winning team clinched victory in the dying moments, sending fans into a frenzy. Social media buzzed with reactions from sports legends and enthusiasts, praising the athletes for their relentless efforts. This season set multiple records, including the highest viewership for a championship final. The victory has cemented the champions’ legacy, while the runner-up team gained immense respect for their resilience. Experts predict that many of the standout players will be scouted for international leagues, making this championship a career-defining moment for many.",
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
        content: "The most valuable player (MVP) of the National Sports Championship 2025 has been announced, and fans couldn’t be more excited. The award was presented during a grand ceremony, where the top athlete was honored for their outstanding performance throughout the tournament. The MVP showcased exceptional skills, scoring crucial points in critical moments, leading their team to an impressive campaign. Selected by a panel of sports journalists, analysts, and fan votes, this recognition is expected to boost the player’s career significantly. Experts believe that major league teams will now be eyeing the MVP for potential signings. The award ceremony also featured legendary sports figures, who praised the talent on display this season. The event ended with celebrations, as the MVP thanked teammates, coaches, and fans for their unwavering support. With this achievement, the player's future in professional leagues looks brighter than ever, and their journey will be closely followed by the global sports community.",
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
        content: "The National Sports Championship 2025 concluded with massive celebrations as fans took to the streets to celebrate a historic victory. The championship-winning team, considered underdogs at the beginning of the season, stunned everyone with their incredible performance. Fans poured into city streets, sports bars, and online forums to express their joy. Social media exploded with congratulatory messages, trending hashtags, and viral videos capturing the excitement. The winning team’s parade saw thousands of supporters cheering for their heroes, waving flags, and wearing team merchandise. Analysts believe that this victory will not only boost the team’s confidence but also elevate their brand value, leading to increased sponsorships and merchandise sales. The championship’s record-breaking viewership and engagement levels demonstrate the immense passion for the sport. This triumph has been a defining moment for the players, solidifying their place in sports history. The celebrations are expected to continue for days, as fans cherish this unforgettable moment in sports history.",
        category: "Sports",
        eventName: "National Sports Championship",
        publishedAgo: "1 day ago",
        likes: 140,
        comments: 38,
        dislikes: 9,
        imageUrl: "https://img.freepik.com/free-photo/fans-celebrating-sports-win_1122-1878.jpg"
      }
    
    // Additional articles follow the same structure...
  ];

  

// Extract unique event names
const eventNames = [...new Set(topArticles.map((article) => article.eventName))];

const Hero = () => {
  const [visibleArticles, setVisibleArticles] = useState(10);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [selectedArticles, setSelectedArticles] = useState({});
  const { category } = useParams();

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
  let filteredArticles = category
    ? topArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
    : topArticles;

  // If any checkboxes are selected, filter articles accordingly
  const selectedTitles = Object.values(selectedArticles)
    .flatMap((event) => Object.entries(event))
    .filter(([_, isChecked]) => isChecked)
    .map(([title]) => title);

  if (selectedTitles.length > 0) {
    filteredArticles = filteredArticles.filter((article) => selectedTitles.includes(article.title));
  }

  return (
    <div className="flex p-4 gap-4">
      
      {/* Sidebar with Event Filters */}
      <aside className="w-1/4 p-4 rounded-lg sticky top-4 h-[75vh] overflow-auto border border-gray-300 ">
        <h2 className="text-xl font-semibold mb-3">Filter by Events</h2>
        <ul className="space-y-2">
          {eventNames.map((eventName, index) => (
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
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 flex flex-col gap-4">
        
        {/* Top News Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            🔥 {category ? `${category} News` : "Top News"}
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
  );
};

export default Hero;
