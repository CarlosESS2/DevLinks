* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --borderColor: rgba(255, 255, 255, 0.5);
  --surfaceColor: rgba(255, 255, 255, 0.1);
  --surfaceColorHover: rgba(255, 255, 255, 0.05);
  --textColor: white;
  --backgroundUrl: url(./assets/bg-mobile.jpg);
  --highLightColor: rgba(255, 255, 255, 0.2);
  --switchImage: url(./assets/moon.svg);
  --borderColorHover: rgba(255, 255, 255, 1);
  --switchAnimation: slideLeft;
}

.light {
  --borderColor: rgba(0, 0, 0, 0.5);
  --surfaceColor: rgba(0, 0, 0, 0.05);
  --surfaceColorHover: rgba(0, 0, 0, 0.02);
  --textColor: black;
  --backgroundUrl: url(./assets/bg-mobile-light.jpg);
  --highLightColor: rgba(0, 0, 0, 0.1);
  --switchImage: url(./assets/sun.svg);
  --borderColorHover: rgba(0, 0, 0, 1);
  --switchAnimation: slideRight;
}

body * {
  font-family: "Inter", sans-serif;
  color: var(--textColor);
}

body {
  background: var(--backgroundUrl) no-repeat top center/cover;
  height: 100vh;
}

/* CONTAINER */
#container {
  width: 100%;
  max-width: 588px;
  margin: 56px auto 0;
  padding: 24px;
}

/* PROFILE */
#profile {
  padding: 24px;
  text-align: center;
}
#profile img {
  width: 112px;
}
#profile p {
  margin-top: 8px;
}

/* SWITCH */
#switch {
  width: 64px;
  height: 24px;
  margin: 8px auto;
  position: relative;
}
#switch button {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: white var(--switchImage) no-repeat center;
  border: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;
  animation: var(--switchAnimation) 0.2s forwards;
}
#switch button:hover {
  outline: 8px solid var(--highLightColor);
}
#switch span {
  width: 64px;
  height: 24px;
  border-radius: 9999px;
  border: 1px solid var(--borderColor);
  background: var(--surfaceColor);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: block;
}

/* LINKS */
#links {
  padding: 24px 0;
}
#links ul {
  list-style: none;
  display: flex;
  gap: 16px;
  flex-direction: column;
}
#links ul li a {
  text-decoration: none;
  font-weight: 500;
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--surfaceColor);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: background 0.2s;
}
#links ul li a:hover {
  border: solid 1.5px var(--borderColorHover);
  background: var(--surfaceColorHover);
}

/* REDES SOCIAIS */
#redesSociais {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  font-size: 24px;
}
#redesSociais a {
  border-radius: 50%;
  padding: 16px;
  transition: background 0.2s;
}
#redesSociais a:hover {
  background: var(--highLightColor);
}

/* FOOTER */
footer {
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* MEDIA QUERIES */
@media (min-width: 700px) {
  :root {
    --backgroundUrl: url(./assets/bg-desktop.jpg);
  }
  .light {
    --backgroundUrl: url(./assets/bg-desktop-light.jpg);
  }
}

/* ANIMATIONS */
@keyframes slideLeft {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}
@keyframes slideRight {
  from {
    left: 50%;
  }
  to {
    left: 0;
  }
}
