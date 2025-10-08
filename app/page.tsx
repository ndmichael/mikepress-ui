import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <DashboardCard 
          title="Posts" 
          icon={<Newspaper className="text-slate-500" 
          size={72} />} count={200} 
        />

        <DashboardCard 
          title="Categories" 
          icon={<Folder className="text-slate-500" 
          size={72} />} 
          count={12} 
        />

        <DashboardCard 
          title="Users" 
          icon={<User className="text-slate-500" 
          size={72} />} 
          count={200} 
        />

        <DashboardCard 
          title="Comments" 
          icon={<MessageCircle className="text-slate-500" 
          size={72} />} 
          count={1200} 
        />
      </div>

      <AnalyticsChart />

      <PostsTable limit={5} />
    </>
  );
}
