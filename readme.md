# 📱 React Native Note App For Technical Test

## 🛠️ Runtime Environment & SDK Versions

| Tool            | Version            |
| --------------- | ------------------ |
| Node.js         | 18.x (Recommended) |
| npm             | ≥ 8.x              |
| yarn (optional) | ≥ 1.22.x           |
| Expo SDK        | 53                 |
| React Native    | 0.79.2             |

> Node.js 18 is tested and recommended. Newer versions (e.g., Node 20 or 22) are also supported.

---

## 📦 Dependencies

This project uses the following major packages:

- `expo@~53.0.9`
- `react@19.0.0`
- `react-native@0.79.2`
- `expo-router@~5.0.6`
- `@react-navigation/native@^7.1.6`
- `expo-linear-gradient@~14.1.4`
- `react-native-reanimated@~3.17.4`
- `react-native-normalize@^1.0.1`
- ...and more (see `package.json`)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/nvtc98/note-app-chuong-interview.git
cd note-app-chuong-interview
```

### 2. Install dependencies

#### Using **npm**:

```bash
npm install
```

#### Or using **yarn**:

```bash
yarn
```

### 3. Start the development server

#### Using **npm**:

```bash
npm run start
# or
npx expo start
```

#### Or using **yarn**:

```bash
yarn start
```

### 4. Open the app

- Scan the QR code in the terminal or browser with **Expo Go** (on iOS/Android).
- Or press `i` to launch iOS simulator / `a` for Android emulator (if installed).

---

## 📁 Project Structure

```
.
├── app/                # Pages and routes
├── components/         # Reusable UI components
├── constants/          # Theme, colors, metrics
├── data/               # Mock or real data sources
├── hooks/              # Custom React hooks
├── assets/             # Fonts, images
├── README.md
└── package.json
```

---

## 💡 Tips

- Use **VS Code** with the **React Native Tools** and **Prettier** extensions.
- If you see issues with `react-native-reanimated`, ensure Babel plugin is configured.
- For production builds, check Expo documentation on `eas build`.
