import React from "react";
import { useAuth } from "@/lib/auth";

import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/Skeleton";
import DashboardShell from "@/components/DashboardShell";

const Dashboard = () => {
  const auth = useAuth();

  return !auth.user ? (
    <DashboardShell>
      <SiteTableSkeleton />
    </DashboardShell>
  ) : (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
