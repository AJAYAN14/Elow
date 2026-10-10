import React, { useState } from 'react';
import Dock from './components/Dock/Dock';
import GlassIcons from './components/GlassIcons/GlassIcons';
import Folder from './components/Folder/Folder';
import bgImage from './assets/background.jpg';
import {
  Home,
  Search,
  Mail,
  MessageSquare,
  Music,
  Image,
  Settings,
  Trash2,
  Globe,
  Github,
  Tv,
  Youtube,
  Code2,
  FileText,
  Compass
} from 'lucide-react';
import './App.css';

export default function App() {
  const [openApps, setOpenApps] = useState(() => new Set(['home', 'mail', 'music']));
  const [badges, setBadges] = useState({ mail: 3, messages: true });

  const launch = (id) => {
    setOpenApps((current) => {
      const next = new Set(current);
      if (!next.has(id)) {
        next.add(id);
      }
      return next;
    });
    setBadges((current) => ({ ...current, [id]: undefined }));
  };

  const quit = (id) => {
    setOpenApps((current) => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  };

  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // GlassIcons 3D Refractive Tiles
  const glassItems = [
    {
      icon: <Globe size={26} strokeWidth={2} />,
      color: 'blue',
      label: 'Google',
      onClick: () => openUrl('https://www.google.com')
    },
    {
      icon: <Github size={26} strokeWidth={2} />,
      color: 'graphite',
      label: 'GitHub',
      onClick: () => openUrl('https://github.com')
    },
    {
      icon: <Tv size={26} strokeWidth={2} />,
      color: 'teal',
      label: '哔哩哔哩',
      onClick: () => openUrl('https://www.bilibili.com')
    },
    {
      icon: <Youtube size={26} strokeWidth={2} />,
      color: 'red',
      label: 'YouTube',
      onClick: () => openUrl('https://www.youtube.com')
    },
    {
      icon: <Mail size={26} strokeWidth={2} />,
      color: 'orange',
      label: 'Mail',
      onClick: () => openUrl('https://mail.google.com')
    },
    {
      icon: <Music size={26} strokeWidth={2} />,
      color: 'purple',
      label: 'Music',
      onClick: () => openUrl('https://music.youtube.com')
    }
  ];

  // Folder Papers (3 Interactive Cards)
  const folderPapers = [
    <div key="p1" className="elow-paper-card" onClick={(e) => { e.stopPropagation(); openUrl('https://github.com'); }}>
      <Code2 size={16} color="#0A84FF" />
      <span>GitHub</span>
    </div>,
    <div key="p2" className="elow-paper-card" onClick={(e) => { e.stopPropagation(); openUrl('https://react.dev'); }}>
      <FileText size={16} color="#FF9F0A" />
      <span>React Docs</span>
    </div>,
    <div key="p3" className="elow-paper-card" onClick={(e) => { e.stopPropagation(); openUrl('https://developer.chrome.com'); }}>
      <Compass size={16} color="#30D158" />
      <span>Extensions</span>
    </div>
  ];

  // Dock items
  const dockItems = [
    {
      id: 'home',
      icon: <Home size={22} strokeWidth={1.8} />,
      label: 'Home',
      active: openApps.has('home'),
      onClick: () => launch('home'),
      menu: [
        { label: '新建窗口', onClick: () => launch('home') },
        { separator: true },
        openApps.has('home')
          ? { label: '退出', onClick: () => quit('home') }
          : { label: '打开', onClick: () => launch('home') }
      ]
    },
    {
      id: 'search',
      icon: <Search size={22} strokeWidth={1.8} />,
      label: 'Search',
      active: openApps.has('search'),
      onClick: () => launch('search'),
      menu: [
        { label: '新搜索', onClick: () => launch('search') },
        { separator: true },
        openApps.has('search')
          ? { label: '退出', onClick: () => quit('search') }
          : { label: '打开', onClick: () => launch('search') }
      ]
    },
    {
      id: 'mail',
      icon: <Mail size={22} strokeWidth={1.8} />,
      label: 'Mail',
      active: openApps.has('mail'),
      badge: badges.mail,
      onClick: () => launch('mail'),
      menu: [
        { label: '收件箱', onClick: () => launch('mail') },
        { label: '写邮件', onClick: () => launch('mail') },
        { separator: true },
        openApps.has('mail')
          ? { label: '退出', onClick: () => quit('mail') }
          : { label: '打开', onClick: () => launch('mail') }
      ]
    },
    {
      id: 'messages',
      icon: <MessageSquare size={22} strokeWidth={1.8} />,
      label: 'Messages',
      active: openApps.has('messages'),
      badge: badges.messages,
      onClick: () => launch('messages'),
      menu: [
        { label: '新信息', onClick: () => launch('messages') },
        { separator: true },
        openApps.has('messages')
          ? { label: '退出', onClick: () => quit('messages') }
          : { label: '打开', onClick: () => launch('messages') }
      ]
    },
    {
      id: 'music',
      icon: <Music size={22} strokeWidth={1.8} />,
      label: 'Music',
      active: openApps.has('music'),
      onClick: () => launch('music'),
      menu: [
        { label: '播放 / 暂停', onClick: () => launch('music') },
        { label: '下一首', onClick: () => launch('music') },
        { separator: true },
        openApps.has('music')
          ? { label: '退出', onClick: () => quit('music') }
          : { label: '打开', onClick: () => launch('music') }
      ]
    },
    {
      id: 'photos',
      icon: <Image size={22} strokeWidth={1.8} />,
      label: 'Photos',
      active: openApps.has('photos'),
      onClick: () => launch('photos'),
      menu: [
        { label: '新建相册', onClick: () => launch('photos') },
        { separator: true },
        openApps.has('photos')
          ? { label: '退出', onClick: () => quit('photos') }
          : { label: '打开', onClick: () => launch('photos') }
      ]
    },
    {
      id: 'settings',
      icon: <Settings size={22} strokeWidth={1.8} />,
      label: 'Settings',
      active: openApps.has('settings'),
      onClick: () => launch('settings'),
      menu: [
        { label: '偏好设置', onClick: () => launch('settings') },
        { separator: true },
        openApps.has('settings')
          ? { label: '退出', onClick: () => quit('settings') }
          : { label: '打开', onClick: () => launch('settings') }
      ]
    },
    { separator: true },
    {
      id: 'trash',
      icon: <Trash2 size={22} strokeWidth={1.8} />,
      label: 'Trash',
      active: openApps.has('trash'),
      onClick: () => launch('trash'),
      menu: [
        { label: '清倒废纸篓', onClick: () => quit('trash') }
      ]
    }
  ];

  return (
    <div className="elow-container">
      {/* Background Wallpaper */}
      <div
        className="elow-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="elow-overlay" />

      {/* Desktop Workspace */}
      <main className="elow-workspace">
        {/* Interactive macOS Folder on Desktop */}
        <section className="elow-folder-section">
          <Folder
            color="#0A84FF"
            size={1.35}
            items={folderPapers}
            className="elow-desktop-folder"
          />
          <span className="elow-folder-label">项目收藏夹</span>
        </section>

        {/* 3D Glass Icons Quick Launch Grid */}
        <section className="elow-glass-section">
          <GlassIcons
            items={glassItems}
            columns={6}
            size={68}
            gap={36}
            plate="tilt"
            tilt={28}
            roundness={0.55}
            hover="lift"
            theme="dark"
            labels="hover"
          />
        </section>
      </main>

      {/* Bottom Dock Bar */}
      <Dock
        items={dockItems}
        position="bottom"
        theme="dark"
        baseItemSize={50}
        magnification={70}
        distance={200}
        panelHeight={68}
        gap={10}
        roundness={0.5}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
        bounce={true}
        autoHide={false}
        tiles={true}
        showLabels={true}
        showIndicators={true}
        showBadges={true}
        badgeColor="#ff453a"
        accentColor="#0a84ff"
      />
    </div>
  );
}
