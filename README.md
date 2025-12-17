# CloudOpsDeploy 🚀

CloudOpsDeploy is a DevOps architecture project designed to deploy
Frontend, Backend, and Worker services using Docker, Kubernetes, and CI/CD.

---

## 🔧 Technologies Used

- Frontend: Next.js
- Backend: Node.js + TypeScript
- Worker: Background job service (TypeScript)
- Containerization: Docker
- Orchestration: Kubernetes (Minikube)
- CI/CD: GitHub Actions
- Container Registry: Docker Hub

---

## 🏗️ Architecture Overview

- Frontend runs as a Kubernetes Deployment exposed via NodePort
- Backend runs as a ClusterIP service
- Worker runs as a Kubernetes Job
- CI/CD pipeline builds and pushes Docker images automatically

---

## 🚀 How to Run the Project

```bash
minikube start
kubectl apply -f infra/k8s/
minikube service frontend
