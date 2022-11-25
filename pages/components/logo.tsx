import useMouse from '@react-hook/mouse-position';
import React from 'react';

export default () => {
  const ref = React.useRef(null)
  const [ rotation, setRotation ] = React.useState<string>("rotate(0)");

  const mouse = useMouse(typeof window === `undefined` ? null : document.body, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  React.useEffect(() => {
    const { clientY = 0, clientX = 0  } = mouse;

    const contentRect = ref?.current?.getBoundingClientRect();
    const midX = contentRect?.x + (contentRect?.width / 2)
    const midY = contentRect?.y + (contentRect?.height / 2)
    const angle = Math.atan2(midY - clientY, midX - clientX);
    const angleDeg = angle * 180 / Math.PI

    const rot = `rotate(${angleDeg}, ${contentRect?.width / 2}, ${contentRect?.height / 2})`
    setRotation(rot)
  }, [ mouse ])
/*   const midx = rect.left + (rect.right - rect.left)/2;
  const midy = rect.top + (rect.bottom - rect.top)/2; */
  return (
    // You must provide the ref to the element you're tracking the
    // mouse position of
    <div ref={ref}>
      <svg id="mysvg" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient gradientTransform={rotation} id="gradient" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a9a5e1" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>

        <path d="M143.2 280.96V294.4H129.6V216.8H143.2V233.76L160.8 224.96V215.2C160.8 211.04 159.36 207.36 156.48 204.48C153.6 201.6 150.24 200 146.4 200H126.4C122.4 200 119.04 201.6 116.16 204.48C113.28 207.36 112 211.04 112 215.2V296C112 300.16 113.28 303.84 116.16 306.72C119.04 309.76 122.4 311.2 126.4 311.2H146.4C150.24 311.2 153.6 309.76 156.48 306.88C159.36 304 160.8 300.32 160.8 296V272.16L143.2 280.96Z" fill="url(#gradient)" />
        <path d="M212 311.2H231.04L208.96 261.76L220.8 255.68V215.2C220.8 211.04 219.36 207.36 216.48 204.48C213.6 201.6 210.24 200 206.4 200H172V311.2H189.6V271.84L193.44 269.76L212 311.2ZM203.2 244.8L189.6 252.16V216.8H203.2V244.8Z" fill="url(#gradient)" />
        <path d="M282.363 200H264.762V294.4H251.163V200H233.562V296C233.562 300.16 234.842 303.84 237.722 306.72C240.602 309.76 243.962 311.2 247.962 311.2H267.963C271.803 311.2 275.162 309.76 278.042 306.88C280.922 304 282.363 300.32 282.363 296V200Z" fill="url(#gradient)" />
        <path d="M295.125 311.2H329.525C333.365 311.2 336.725 309.76 339.605 306.88C342.485 304 343.925 300.32 343.925 296V215.2C343.925 211.04 342.485 207.36 339.605 204.48C336.725 201.6 333.365 200 329.525 200H295.125V311.2ZM326.325 294.4H312.725V216.8H326.325V294.4Z" fill="url(#gradient)" />
        <path d="M399.087 216.8V200H371.087C367.087 200 363.728 201.6 360.848 204.48C357.968 207.36 356.688 211.04 356.688 215.2V311.2H399.087V294.4H374.288V266.4L399.087 253.6V233.92L374.288 246.72V216.8H399.087Z" fill="url(#gradient)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M512 0H0V512H512V0ZM488 24H24V488H488V24Z" fill="url(#gradient)" />

      </svg>
    </div>
  )
}