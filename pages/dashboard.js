import React from "react";
import useSWR from "swr";

import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/Skeleton";
import SiteTable from "@/components/SiteTable";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  const { data } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
