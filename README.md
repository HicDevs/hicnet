# hicnet 
# 🌳 Hickory – Monorepo

This is the **official monorepo** for the Hickory Blockchain ecosystem.  
It contains all core components: **Wallet**, **Admin Dashboard**, **Backend**, **Explorer (HICScan)**, and **HickoryDex**.

---

## 📖 Overview
Hickory is a next-generation blockchain ecosystem built on **Cosmos + IBC** with Proof-of-Stake consensus.  
Our mission is to provide a scalable, secure, and interoperable platform for decentralized finance and beyond.

---

## 📦 Structure
hicnet/
├── wallet/ # User wallet (Keplr, staking, send/receive)
├── admin/ # Admin dashboard
├── backend/ # API services (DTOs, Cosmos SDK integration)
├── docs/ # Documentation (Whitepaper drafts, ADRs)
├── hicscan/ # Explorer module
└── dex/ # HickoryDex (AMM / liquidity pools)

---

## 🚀 Roadmap
- **v0.1** → Wallet placeholder, backend `/health` API ✅
- **v0.2** → Admin Users table, HICScan MVP
- **v1.0** → HickoryDex Alpha launch

---

## 🌐 Links
📖 Documentation: [`/docs`](./docs)  
🔗 Discord: [Hickory Dev Hub](https://discord.gg/tRKpfcKy)  



---

## 🚀 Current Status (2025-08-19)
- ✅ **Repo live on GitHub** (main branch)
- ✅ **Discord bot** hourly status updates
- ⏳ Whitepaper draft ongoing (Intro done)
- ⏳ Funding model draft (Crypto card provider vs BIN sponsor)
- ⏳ Wallet UI mockups & DTO definitions in progress
- ⏳ First infra pipelines (CI/CD) to be added

---

## 🧑‍🤝‍🧑 Team Roles
- **Lara** → UI/UX, design, diagrams  
- **Bob** → System architecture, DTOs, ADRs  
- **Suzy** → Backend & API implementation  
- **Lucy** → Documentation & process orchestration  
- **András (Co-CEO)** → Strategy, funding, infra setup  

---

## 📌 Next Steps
1. Setup **GitHub Projects board** (Wallet / Admin / Backend / Scan / Dex).  
2. Define initial **Issues** (Wallet login, Admin user table, Backend /health).  
3. Commit Whitepaper v0.2 draft to `/docs`.  
4. Prepare **handoff ZIP** (repo + discord-bot + README) for #handoff channel.  

---

## 📖 Documentation
All documents are under `/docs`.  
- `docs/whitepaper/` → Whitepaper drafts  
- `docs/adr/` → Architecture Decision Records (ADR-0001: Monorepo)  
- `docs/infra.md` → Infrastructure setup  

---

## 🛠 Development
Clone the repo:
```bash
git clone git@github.com:HicDevs/hicnet.git
cd hicnet
git checkout -b feature/<name>
git push origin feature/<name>

---

### 3) Mentsd el:
- **CTRL+O** → Enter  
- **CTRL+X** → kilépés  

---

### 4) Commit + Push
```bash
git add README.md
git commit -m "Add project README with structure, roles and next steps"
git push origin main


