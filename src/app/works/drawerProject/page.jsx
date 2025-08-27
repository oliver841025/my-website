'use client';
import Image from 'next/image';
import { useState } from 'react';

const DrawerProject = () => {
  const [showReal, setShowReal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div className="flex w-full items-center border overflow-x-auto mt-4">
        <Image
          src="/drawer_project/drawer_1.png"
          alt="Drawer Project"
          width={650}
          height={600}
          onMouseEnter={() => setShowReal(true)}
          onMouseLeave={() => setShowReal(false)}
          onMouseMove={handleMouseMove}
          className="relative"
        />
        {showReal && (
          <div
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            <Image
              src="/drawer_project/drawer_1_real.jpg"
              alt="Drawer Real"
              width={200}
              height={200}
              className="opacity-90"
            />
          </div>
        )}
        <Image src="/drawer_project/drawer_2.png" alt="Drawer Project" width={650} height={600} />
        <Image src="/drawer_project/drawer_3.png" alt="Drawer Project" width={650} height={600} />
        <Image src="/drawer_project/drawer_4.png" alt="Drawer Project" width={650} height={600} />
        <Image src="/drawer_project/drawer_5.png" alt="Drawer Project" width={650} height={600} />
        <Image src="/drawer_project/drawer_6.png" alt="Drawer Project" width={650} height={600} />
      </div>
      <div className="text-xs font-medium mt-2">
        <span>似顏繪活動，第一張滑動上去看得到本人，但其他張沒有本人照片，無法顯示，因為都是現場隨機跟路人邊畫邊聊天</span>
      </div>
    </>
  );
};

export default DrawerProject;
