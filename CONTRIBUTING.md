# Contributing to Hickory

Welcome to the Hickory project! 🚀  
This document explains how to contribute.

---

## Workflow
- All work goes through **Issues** on the GitHub Project Board.
- Every change must be on a **feature branch**.
- Submit a **Pull Request (PR)** → requires at least **1 reviewer approval** before merge.
- Main branch is **protected** (no direct pushes).

---

## Module Owners
- **Wallet (frontend, Keplr integration):** Lara
- **Admin (dashboard, users table):** Bob
- **Backend (APIs, health, staking, explorer):** Suzy
- **Documentation (whitepaper, ADRs, contributing):** Lucy

---

## Commit Messages
Use **Conventional Commits** style:
- `feat(wallet): add Keplr login button`
- `fix(admin): correct user role display`
- `docs(whitepaper): add tokenomics section`
- `chore: update dependencies`

---

## Branch Naming
- `feature/<module>-<short-description>`
- `fix/<module>-<short-description>`
- Example: `feature/wallet-keplr-login`

---

## Pull Requests
- Link the issue number (e.g. `Closes #12`)
- Ensure `npm run lint && npm test` passes (when available)
- Request review from the **module owner**

---

## Code Style
- **Backend:** Node.js (ESM imports)
- **Frontend:** React + Vite (planned)
- **Docs:** Markdown + diagrams in `/docs`

