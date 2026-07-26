import {
  Database,
  Brain,
  FlaskConical,
  FileText,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ActionCard from "../components/ActionCard";
import EmptyState from "../components/EmptyState";

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to ML Studio 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Build, train, evaluate and compare machine learning models effortlessly.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Datasets"
          value="0"
          icon={<Database size={36} />}
        />

        <StatCard
          title="Experiments"
          value="0"
          icon={<FlaskConical size={36} />}
        />

        <StatCard
          title="Models"
          value="0"
          icon={<Brain size={36} />}
        />

        <StatCard
          title="Reports"
          value="0"
          icon={<FileText size={36} />}
        />

      </div>

      {/* Quick Actions */}
      <div>

        <h2 className="text-2xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <ActionCard
            title="Upload Dataset"
            description="Import your CSV dataset and start exploring your data."
            buttonText="Upload"
          />

          <ActionCard
            title="Start Experiment"
            description="Configure preprocessing and train ML models."
            buttonText="Create Experiment"
          />

        </div>

      </div>

      {/* Recent Activity */}

      <div>

        <h2 className="text-2xl font-semibold mb-4">
          Recent Activity
        </h2>

        <EmptyState
          message="No datasets or experiments have been created yet."
        />

      </div>

    </div>
  );
}

export default Dashboard;