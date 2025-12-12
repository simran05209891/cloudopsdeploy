import React from 'react';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold text-blue-600">CloudOpsDeploy Platform</h1>

      <p className="mt-4 text-gray-700 text-lg">
        A GitOps-driven DevOps Automation Platform — built by <strong>Simran Anand</strong>.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 rounded-lg shadow bg-white border">
          <h2 className="font-semibold text-xl mb-2">Deployment Status</h2>
          <p className="text-gray-600">Kubernetes deployments synced via ArgoCD.</p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white border">
          <h2 className="font-semibold text-xl mb-2">Pipeline Status</h2>
          <p className="text-gray-600">View CI/CD builds triggered by GitHub Actions.</p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white border">
          <h2 className="font-semibold text-xl mb-2">Cluster Monitoring</h2>
          <p className="text-gray-600">Prometheus + Grafana monitoring enabled.</p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white border">
          <h2 className="font-semibold text-xl mb-2">GitOps Sync</h2>
          <p className="text-gray-600">Automatic sync + rollback using ArgoCD.</p>
        </div>

      </div>

      <footer className="mt-16 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} CloudOpsDeploy — Developed by <strong>Simran Anand</strong>.
      </footer>

    </main>
  );
}
