import { j as jsxRuntimeExports, r as reactExports, g as gsapWithCSS, S as ScrollTrigger, L as Link, u as useLocation, N as NavLink, R as Routes, a as Route, b, y, c as ReactDOM, d as React, B as BrowserRouter } from "./vendor-CH57UfzD.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const Arrow = "/ArrowDark.svg";
const index$5 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Arrow.svg", alt: "" }) });
};
const RoundedBtn = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "roundedBtn", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Arrow, alt: "arrow" }) });
};
const Index$3 = () => {
  reactExports.useEffect(() => {
    gsapWithCSS.registerPlugin(ScrollTrigger);
  }, []);
  const text = "Connecting you with qualified psychologists for better mental well-being.";
  const words = text.split(" ");
  reactExports.useEffect(() => {
  }, [words]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "heroSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leftSide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "category", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text", children: "Mindfulness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text", children: "Meditation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heroText", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text", children: "START YOUR JOURNEY" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "background" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "borderedText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text", children: [
              "TO",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "MENTAL CLARITY" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "background" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bottom", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text", children: "AND WELL-BEING" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "background" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paragraph", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text",
              style: { display: "flex", flexWrap: "wrap", gap: "2px" },
              children: words.slice(0, 5).map((word, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `word-${index2}`, children: [
                word,
                "  "
              ] }, index2))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text",
              style: { display: "flex", flexWrap: "wrap", gap: "2px" },
              children: words.slice(5).map((word, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `word-${index2 + 5}`, children: [
                word,
                "  "
              ] }, index2 + 5))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Subscribe Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Explore" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "icons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "midSide", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", onLoad: reactExports.lazy }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rightSide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text", children: "MindEase" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text", children: "Wanna Know More about our website?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoundedBtn, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(index$5, {}) })
  ] });
};
const Index$2 = () => {
  const services = [
    {
      title: "Teletherapy Platforms",
      icon: "/brain.webp",
      url: "/service1"
    },
    {
      title: "Mindfulness and Meditation Apps",
      icon: "/radioMusic.webp",
      url: "/service2"
    },
    {
      title: "Mental Health Assessment Tools",
      icon: "/tools.webp",
      url: "/service2"
    },
    {
      title: "Support Community Platforms",
      icon: "/support.webp",
      url: "/service2"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "serviceSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Here' what you can do with our Mental health" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: " care services" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { children: [
        "Learn More ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Arrow.svg", alt: "" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: services.map((service, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card$1,
      {
        title: service.title,
        description: service.description,
        icon: service.icon,
        url: service.url
      },
      index2
    )) })
  ] }) });
};
const Card$1 = ({ title, icon, url }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: icon, alt: title, loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }) })
  ] });
};
const index$4 = () => {
  const imgRef = reactExports.useRef(null);
  const handleMouseEnter = () => {
  };
  const handleMouseLeave = () => {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "explanation", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Explanation of MindEase" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            overflow: "hidden",
            position: "relative",
            borderRadius: "16px",
            height: "auto"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/puzzle.webp",
              alt: "images",
              loading: "lazy",
              ref: imgRef,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A bridge for those seeking to consult their mental health with qualified psychologists and experts. We connect you to professional support for a better understanding of your mental well-being." })
    ] })
  ] }) });
};
const Card = ({ message, img, star, type, prefesion, color }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `card ${type ? "show" : "hidden"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "customer feedback", loading: "lazy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bot", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "star", children: [...Array(star)].map((_, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/star-icon.svg",
          alt: "star-icon",
          loading: "lazy"
        },
        index2
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { backgroundColor: `#${color}` }, children: prefesion })
    ] })
  ] });
};
const Index$1 = () => {
  const top = [
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user1.webp",
      star: 4,
      type: "show",
      prefesion: "Teacher",
      color: "F6D6D2"
    },
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user2.webp",
      star: 5,
      type: "hidden",
      prefesion: "Student",
      color: "E9FCD6"
    }
  ];
  const mid = [
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user3.webp",
      star: 4,
      type: "show",
      prefesion: "Office Workers",
      color: "E9FCD6"
    },
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user4.webp",
      star: 5,
      type: "hidden",
      prefesion: "Lawyers",
      color: "F6D6D2"
    },
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user5.webp",
      star: 5,
      type: "hidden",
      prefesion: "Artists",
      color: "E9FCD6"
    }
  ];
  const bot = [
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user6.webp",
      star: 4,
      type: "show",
      prefesion: "Student",
      color: "E9FCD6"
    },
    {
      message: "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user7.webp",
      star: 5,
      type: "hidden",
      prefesion: "Lawyers",
      color: "F6D6D2"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "testimonialSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Our Customers Said" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerTop", children: top.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          message: item.message,
          img: item.img,
          star: item.star,
          type: item.type,
          prefesion: item.prefesion,
          color: item.color
        },
        index2
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerMid", children: mid.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          message: item.message,
          img: item.img,
          star: item.star,
          type: item.type,
          prefesion: item.prefesion,
          color: item.color
        },
        index2
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerBot", children: bot.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          message: item.message,
          img: item.img,
          star: item.star,
          type: item.type,
          prefesion: item.prefesion,
          color: item.color
        },
        index2
      )) })
    ] })
  ] }) });
};
const index$3 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ctaSection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "element el6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Are you ready?" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "To improving your mental" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "well-being" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join Thousands of our User who already using Mind Ease to Improve their mental well-being" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "buttonContainer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/appointment", className: "consult btn", children: "Consult Now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "talk btn", children: "Lets Talk" })
    ] })
  ] }) }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "footer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__left__about", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__left__wrapperLogo", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Logo.svg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "MindEase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Quam pharetra egestas imperdiet sed. Sed morbi arcu mauris ac lacinia non ut elit tellus. Eleifend elementum at eleifend mi amet." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer__left__copyright", children: "@2024 MindEase. All rights reserved." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__right__link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Appointment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AboutUs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__right__link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terms of Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Disclaimer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__right__link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Follow Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facebook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Twitter" })
        ] })
      ] })
    ] })
  ] });
};
const index$2 = () => {
  const location = useLocation();
  const imgSrc = location.pathname === "/appointment/psychology" ? "/Logo.svg" : "/Logo.svg";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "headingContainer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt: "Logo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logoWrapper", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "logo", children: "MindEase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "subLogo", children: "MentalHealthCare" })
    ] })
  ] }) });
};
const LandingPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Index$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Index$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
};
const index$1 = () => {
  reactExports.useEffect(() => {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    gsapWithCSS.utils.toArray(".h1, .h2").forEach((text) => {
      gsapWithCSS.fromTo(
        text,
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          delay: 0.5
        }
      );
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "aboutSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "About Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "h2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "“MindEase Healthcare” " }),
          "Providing"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "h2 second", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Best Opportunities" }),
          " For Health"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h2", children: "& Wellness Around The Globe." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "", children: "MindEase Healthcare is an organization dedicated to providing top-notch healthcare services. Our mission is to deliver quality care by combining the latest technology with a compassionate approach. We believe in a holistic approach to health and wellness, ensuring that our patients receive the best care possible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn", children: [
          "Join Us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Arrow.svg", alt: "" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "./HeroImage.webp",
            alt: "Modern healthcare facility",
            className: "firstImg"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "./HeroImage2.webp",
            alt: "Healthcare professionals discussing",
            className: "secondImg"
          }
        )
      ] }) })
    ] })
  ] }) });
};
const Bca = "/Brands/Bca.png";
const BI = "/Brands/BankIndonesia.png";
const Google = "/Brands/Google.png";
const Mandiri = "/Brands/Mandiri.png";
const Microsoft = "/Brands/Microsoft.png";
const Traveloka = "/Brands/Traveloka.png";
const images = [
  { src: Bca, alt: "BCA Logo" },
  { src: BI, alt: "BI Logo" },
  { src: Google, alt: "Google Logo" },
  { src: Mandiri, alt: "Mandiri Logo" },
  { src: Microsoft, alt: "Microsoft Logo" },
  { src: Traveloka, alt: "Traveloka Logo" }
];
const BrandSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "brands", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "brand-logos", children: images.map((image, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.src, alt: image.alt, loading: "lazy" }, index2)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
  ] });
};
const index = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "visiMisiSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Our Mision" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our vision is to provide accessible mental health support, empowering individuals to live healthier lives. We connect users with professionals through a user-friendly platform, offering personalized care and ongoing support." }) })
  ] }) });
};
const Index = () => {
  const panels = reactExports.useRef([]);
  const [currentPanel, setCurrentPanel] = reactExports.useState(0);
  const createPanelsRefs = (panel, index2) => {
    panels.current[index2] = panel;
  };
  const goToPanel = (index2) => {
    setCurrentPanel(index2);
    gsapWithCSS.to(panels.current, {
      xPercent: -100 * index2,
      duration: 0.75,
      ease: "power1.inOut"
    });
  };
  const handleNext = () => {
    const nextIndex = (currentPanel + 1) % panels.current.length;
    goToPanel(nextIndex);
  };
  const handlePrevious = () => {
    const prevIndex = (currentPanel - 1 + panels.current.length) % panels.current.length;
    goToPanel(prevIndex);
  };
  reactExports.useEffect(() => {
    gsapWithCSS.set(panels.current, { xPercent: 0 });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "storySection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Our Story" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerStory", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel", ref: (el) => createPanelsRefs(el, 0), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "left-button", onClick: handlePrevious, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "left", src: "/Arrow.svg", alt: "Previous" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Panel 1: Our beginning..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In the midst of a bustling city, an idea emerged as many friends struggled with mental health. A desire to help was translated into a plan for creating a website that provides information and support for mental health. An initial concept for a safe and user-friendly website was designed by a small team." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "right-button", onClick: handleNext, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "right", src: "/Arrow.svg", alt: "Next" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel", ref: (el) => createPanelsRefs(el, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "left-button", onClick: handlePrevious, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "left", src: "/Arrow.svg", alt: "Previous" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Panel 2: Our Growth..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'The website named "MindCare" was developed through the hard work of the team. Creativity and technology were combined to create a platform that includes discussion forums, helpful articles, and online counseling services. Involvement from mental health professionals ensured that the content provided was relevant and useful.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "right-button", onClick: handleNext, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "right", src: "/Arrow.svg", alt: "Next" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel", ref: (el) => createPanelsRefs(el, 2), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "left-button", onClick: handlePrevious, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "left", src: "/Arrow.svg", alt: "Previous" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Panel 3: Our Future..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "After the launch, positive attention from the community was received by MindCare. Benefits from the available content and support were felt by users. Webinars and workshops on mental health were held, building a caring community. The journey of MindCare proved that meaningful change in mental health can be created through dedication and collaboration." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "right-button", onClick: handleNext, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "right", src: "/Arrow.svg", alt: "Next" }) })
      ] }) })
    ] })
  ] });
};
const AboutUs = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrandSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(index, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Index, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Consultant = ({ name }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "consultant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `./${name}.webp`, alt: name, className: name, loading: "lazy" }) });
};
const Question = ({ question, answer, isActive, onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "question", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { onClick, style: { cursor: "pointer" }, children: question }) }),
    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: answer })
  ] });
};
const Counter = ({ targetValue }) => {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2e3;
    const incrementTime = 1e3 / 60;
    const totalIncrements = duration / incrementTime;
    const incrementValue = end / totalIncrements;
    const updateCounter = () => {
      start += incrementValue;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(updateCounter);
  }, [targetValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "h3", children: [
    count,
    "+"
  ] });
};
const Appointment = () => {
  const consultants = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" }
  ];
  const faqs = [
    {
      question: "What is the purpose of this mental health consultation service?",
      answer: "Our service provides access to professional mental health counselors who offer personalized guidance and support for a variety of mental health concerns."
    },
    {
      question: "How do I book a consultation with a mental health expert?",
      answer: "You can book a consultation by selecting a counselor from our platform, choosing a date and time, and confirming the appointment through our booking system."
    },
    {
      question: "Are the consultations confidential?",
      answer: "Yes, all consultations are strictly confidential to ensure your privacy and comfort."
    },
    {
      question: "What types of mental health issues can be addressed?",
      answer: "Our experts can help with anxiety, depression, stress management, relationship issues, and more."
    },
    {
      question: "How much does a consultation cost?",
      answer: "The cost varies depending on the counselor and session length, and all fees are transparently listed before booking."
    }
  ];
  const [activeIndexes, setActiveIndexes] = reactExports.useState([]);
  const handleClick = (index2) => {
    setActiveIndexes(
      (prevIndexes) => prevIndexes.includes(index2) ? prevIndexes.filter((i) => i !== index2) : [...prevIndexes, index2]
    );
  };
  reactExports.useEffect(() => {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    gsapWithCSS.fromTo(
      ".one",
      { rotate: "0deg" },
      { rotate: "-5deg", duration: 1, delay: 0.5 }
    );
    gsapWithCSS.fromTo(
      ".second",
      { rotate: "0deg" },
      { rotate: "-10deg", duration: 1, delay: 0.5 }
    );
    gsapWithCSS.fromTo(
      ".third",
      { rotate: "0deg" },
      { rotate: "-15deg", duration: 1, delay: 0.5 }
    );
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "appointmentSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Quick Easy Appointments" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal bot", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
          "for Better",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " Health!" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat helped", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Arrow.svg", alt: "arrow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { targetValue: 3e4 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p", children: "People helped" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/user1.webp", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "one" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "second" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "third" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat helper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Arrow.svg", alt: "arrow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { targetValue: 100 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "textReveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p", children: "Consultant team ready" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p", children: "to help" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "optionSection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/appointment/psychology", className: "card cLeft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Psychology" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "S2 Physchologist Consult" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stress, Trauma, Anxiety, Bipolar, Etc." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Get a Diagnosa" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Arrow.svg", alt: "" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/appointment/life-coach", className: "card cRight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Life Coach" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "S2 Physchologist Consult" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stress, Trauma, Anxiety, Bipolar, Etc." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Get a Diagnosa" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "./Arrow.svg", alt: "" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "consultantSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Consultant you" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "can trust" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda cum nemo atque earum necessitatibus quae quidem, quis, iure mollitia deleniti similique veritatis, blanditiis nesciunt saepe eius molestiae ipsum? Rem, possimus." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row top", children: consultants.slice(0, 2).map((image) => /* @__PURE__ */ jsxRuntimeExports.jsx(Consultant, { name: image.name }, image.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row bot", children: consultants.slice(2, 4).map((image) => /* @__PURE__ */ jsxRuntimeExports.jsx(Consultant, { name: image.name }, image.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "differencesSection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Differences in Consultation" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerCard", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Counseling" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Intended for users with CLINICAL problems (eg: trauma, depression, anxiety, bipolar, sexuality issues)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Provided with a more in-depth assessment and specific therapy if needed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Handled by a Psychologist who is a Masters graduate in adult clinical psychology." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Mentoring" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dealing with NON-CLINICAL issues (examples: friendship,work, love, interests, family problems,self-knowledge, future)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Providing technical guidance and directives (e.g. self-reflection or action plan creation)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Handled by trained Mentors who are graduates of S1 Psychology" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "faqSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Frequenlty asked" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textReveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "questions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Still need help? Chat to us." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: faqs.map((faq, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Question,
        {
          question: faq.question,
          answer: faq.answer,
          isActive: activeIndexes.includes(index2),
          onClick: () => handleClick(index2)
        },
        index2
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Bola = "/bolaKusut.webp";
const Hero = "/HeroImage.webp";
const User = "/user5.webp";
const Schedule$1 = ({ day, date, month, booked }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ` ${booked == 25 ? `full` : `card`}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: day }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
      date,
      " ",
      month
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: booked < 20 ? `green` : `red`, children: booked }),
        "/25"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Booked" })
    ] })
  ] });
};
const LifeCoach = () => {
  const schedule = [
    { day: "Monday", date: 30, month: "SEP", booked: 10 },
    { day: "Tuesday", date: 1, month: "OCT", booked: 15 },
    { day: "Wednesday", date: 2, month: "OCT", booked: 20 },
    { day: "Thursday", date: 3, month: "OCT", booked: 18 },
    { day: "Friday", date: 4, month: "OCT", booked: 22 },
    { day: "Saturday", date: 5, month: "OCT", booked: 5 },
    { day: "Sunday", date: 6, month: "OCT", booked: 25 }
  ];
  const maskRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const mask = maskRef.current;
    const content = contentRef.current;
    gsapWithCSS.set(mask, { xPercent: -50, yPercent: -50 });
    const moveMask = (e) => {
      const bounds = content.getBoundingClientRect();
      if (e.clientX >= bounds.left && e.clientX <= bounds.right && e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
        mask.style.display = "block";
        gsapWithCSS.to(mask, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        mask.style.display = "none";
      }
    };
    const handleScroll = () => {
      const bounds = content.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y2 = window.innerHeight / 2;
      if (x < bounds.left || x > bounds.right || y2 < bounds.top || y2 > bounds.bottom) {
        mask.style.display = "none";
      }
    };
    window.addEventListener("mousemove", moveMask);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", moveMask);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bannerSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Are you feeling stuck and unfulfilled in life? Perhaps your challenges are impacting various areas of your well-being. Or worse, could they be hindering your potential for success? Connect with a Life Coach at MindEase today!" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Growth" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Life Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "YourMind" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "buttonSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "Book an Appointment Now!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "13.983+ People Have Consulted Here" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "explainSection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "What Exactly you do In Physcholog Feature?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Counseling is a one-on-one consultation with a psychologist to address issues that disrupt your daily life or put yourself and others at risk." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Signs you need to consult with physchology" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerCard", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Harming or endangering oneself (e.g., Feeling low self-esteem, self-harming thoughts, eating disorders)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Harming or endangering others (e.g., Struggling to control emotions leading to violence against others)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Disrupting daily life (e.g., Inability to sleep leading to difficulty focusing at work, loss of appetite resulting in physical illness)" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "scheaduleSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Future Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: schedule.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Schedule$1,
        {
          day: item.day,
          date: item.date,
          month: item.month,
          booked: item.booked
        },
        index2
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pricingSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Choose your right plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$8 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro Plus" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$12 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card proBundling", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro Bundling" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$59 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "stepsSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "3 Step’s To Consult" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: User, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Choose Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Wonder twenty hunted and put income set desire expect. Am cottage calling." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Hero, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Choose Your Session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Bola, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Start Consult" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: maskRef, className: "mask-cursor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ctaSectionAppoinment content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", ref: contentRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Got a problem? Don’t keep it to yourself. Reach out to a psychologist at MindEase for help." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/appointment/psychology/form", children: "Book An Appointment Now!" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Schedule = ({ day, date, month, booked }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ` ${booked == 25 ? `full` : `card`}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: day }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
      date,
      " ",
      month
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: booked < 20 ? `green` : `red`, children: booked }),
        "/25"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Booked" })
    ] })
  ] });
};
const Psychology = () => {
  const schedule = [
    { day: "Monday", date: 30, month: "SEP", booked: 10 },
    { day: "Tuesday", date: 1, month: "OCT", booked: 15 },
    { day: "Wednesday", date: 2, month: "OCT", booked: 20 },
    { day: "Thursday", date: 3, month: "OCT", booked: 18 },
    { day: "Friday", date: 4, month: "OCT", booked: 22 },
    { day: "Saturday", date: 5, month: "OCT", booked: 5 },
    { day: "Sunday", date: 6, month: "OCT", booked: 25 }
  ];
  const maskRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const mask = maskRef.current;
    const content = contentRef.current;
    gsapWithCSS.set(mask, { xPercent: -50, yPercent: -50 });
    const moveMask = (e) => {
      const bounds = content.getBoundingClientRect();
      if (e.clientX >= bounds.left && e.clientX <= bounds.right && e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
        mask.style.display = "block";
        gsapWithCSS.to(mask, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        mask.style.display = "none";
      }
    };
    const handleScroll = () => {
      const bounds = content.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y2 = window.innerHeight / 2;
      if (x < bounds.left || x > bounds.right || y2 < bounds.top || y2 > bounds.bottom) {
        mask.style.display = "none";
      }
    };
    window.addEventListener("mousemove", moveMask);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", moveMask);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bannerSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Are you feeling stuck and unfulfilled in life? Perhaps your challenges are impacting various areas of your well-being. Or worse, could they be hindering your potential for success? Connect with a Life Coach at MindEase today!" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Growth" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Psychology" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "YourMind" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "buttonSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "Book an Appointment Now!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "13.983+ People Have Consulted Here" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "explainSection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "What Exactly you do In Physcholog Feature?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Counseling is a one-on-one consultation with a psychologist to address issues that disrupt your daily life or put yourself and others at risk." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Signs you need to consult with physchology" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerCard", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Harming or endangering oneself (e.g., Feeling low self-esteem, self-harming thoughts, eating disorders)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Harming or endangering others (e.g., Struggling to control emotions leading to violence against others)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Disrupting daily life (e.g., Inability to sleep leading to difficulty focusing at work, loss of appetite resulting in physical illness)" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "scheaduleSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Future Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: schedule.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Schedule,
        {
          day: item.day,
          date: item.date,
          month: item.month,
          booked: item.booked
        },
        index2
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pricingSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "Choose your right plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$8 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro Plus" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$12 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card proBundling", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "level", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pro Bundling" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "desc", children: [
              "A bridge for those seeking to consult their mental health with qualified psychologists and experts.",
              " "
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
              "$59 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "/session" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assesmen Pra-konseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lembar Kerja (Worksheet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kesehatan Mental" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tes Kepribadian" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "I want This One!" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "stepsSection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading", children: "3 Step’s To Consult" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: User, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Choose Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Wonder twenty hunted and put income set desire expect. Am cottage calling." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Hero, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Choose Your Session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Bola, alt: "image", className: "img-inside" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Start Consult" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: maskRef, className: "mask-cursor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ctaSectionAppoinment content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", ref: contentRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Got a problem? Don’t keep it to yourself. Reach out to a psychologist at MindEase for help." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/appointment/psychology/form", children: "Book An Appointment Now!" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const Navbar = () => {
  const navbar = ["Appointment", "About"];
  const itemRefs = reactExports.useRef([]);
  const [hoveredItemWidth, setHoveredItemWidth] = reactExports.useState(0);
  const [hoveredItemLeft, setHoveredItemLeft] = reactExports.useState(0);
  const [activeIndex, setActiveIndex] = reactExports.useState(2);
  const homeRef = reactExports.useRef(null);
  const [homeWidth, setHomeWidth] = reactExports.useState(null);
  const location = useLocation();
  const linkRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const homeItem = homeRef.current;
    if (homeItem) {
      const width = parseFloat(
        homeItem.getBoundingClientRect().width.toFixed(2)
      );
      setHomeWidth(width);
    }
  }, []);
  reactExports.useEffect(() => {
    if (location.pathname === "/") {
      setActiveIndex(2);
      handleSetActiveBackground(2, false);
    } else {
      navbar.forEach((item, index2) => {
        if (location.pathname === `/${item.toLowerCase()}`) {
          setActiveIndex(index2);
          handleSetActiveBackground(index2, false);
        }
      });
    }
    updateLinkColors(activeIndex);
  }, [location.pathname, activeIndex]);
  const handleSetActiveBackground = (index2, isHovering) => {
    const item = itemRefs.current[index2];
    const homeItem = homeRef.current;
    const homeLeft = homeItem.getBoundingClientRect().left;
    const parentRect = linkRef.current.getBoundingClientRect();
    let width, left;
    if (isHovering && index2 === 2) {
      width = homeWidth;
      left = homeLeft - parentRect.left;
    } else if (item) {
      const rect = item.getBoundingClientRect();
      width = rect.width;
      left = rect.left - parentRect.left;
    } else {
      width = homeWidth;
      left = homeLeft - parentRect.left;
    }
    setHoveredItemWidth(width);
    setHoveredItemLeft(left);
    gsapWithCSS.to(".backgroundHovered", {
      x: left,
      width,
      backgroundColor: "#2c2c2c",
      ease: "power3.out",
      duration: 0.3
    });
    updateLinkColors(index2, isHovering);
  };
  const updateLinkColors = (index2, isHovering = false) => {
    navbar.forEach((_, idx) => {
      gsapWithCSS.to(itemRefs.current[idx], {
        color: idx === index2 ? "#fcfcfc" : "#2c2c2c",
        // Set color based on active index
        duration: 0.3,
        ease: "power3.out"
      });
    });
    if (itemRefs.current[index2]) {
      gsapWithCSS.to(itemRefs.current[index2], {
        color: "#fcfcfc",
        duration: 0.3,
        ease: "power3.out"
      });
    }
    if (isHovering && itemRefs.current[index2]) {
      gsapWithCSS.to(itemRefs.current[index2], {
        color: "#fcfcfc",
        duration: 0.3,
        ease: "power3.out"
      });
    }
  };
  const handleMouseEnter = (index2) => {
    handleSetActiveBackground(index2, true);
  };
  const handleMouseLeaveLink = () => {
    handleSetActiveBackground(activeIndex, false);
  };
  const handleLinkClick = (index2) => {
    setActiveIndex(index2);
    handleSetActiveBackground(index2, false);
  };
  const handleMouseLeaveItem = (index2) => {
    if (index2 !== activeIndex) {
      gsapWithCSS.to(itemRefs.current[index2], {
        color: "#2c2c2c",
        duration: 0.3,
        ease: "power3.out"
      });
    }
  };
  const handleMouseLeaveHome = () => {
    handleSetActiveBackground(activeIndex, false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "navbar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "home",
        ref: homeRef,
        onMouseEnter: () => handleSetActiveBackground(2, true),
        onMouseLeave: handleMouseLeaveHome,
        onClick: () => handleLinkClick(2),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Home /" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "link", ref: linkRef, onMouseLeave: handleMouseLeaveLink, children: [
      navbar.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavLink,
        {
          ref: (el) => itemRefs.current[index2] = el,
          onMouseEnter: () => handleMouseEnter(index2),
          onMouseLeave: () => handleMouseLeaveItem(index2),
          onClick: () => handleLinkClick(index2),
          to: item === "Home" ? "/" : `/${item.toLowerCase()}`,
          className: ({ isActive }) => `item ${isActive ? "active" : ""}`,
          style: { color: activeIndex === index2 ? "#fcfcfc" : "#2c2c2c" },
          children: item
        },
        index2
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "backgroundHovered",
          style: {
            width: hoveredItemWidth,
            transform: `translateX(${hoveredItemLeft}px)`
          }
        }
      )
    ] })
  ] });
};
const ServicePackage = ({ handleStepChange }) => {
  const services = [
    {
      title: "VOICE CALL",
      type: "Rekomendasi",
      duration: "± 60 menit",
      price: "Rp 259.000",
      features: [
        "Konsultasi via Telepon",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*"
      ]
    },
    {
      title: "VIDEO CALL",
      type: "Rekomendasi",
      duration: "± 60 menit",
      price: "Rp 309.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*"
      ]
    },
    {
      title: "Bundling Extra Webinar",
      type: "Rekomendasi + Eksklusif Webinar",
      duration: "± 2 Jam",
      price: "Rp 614.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
        "Akses Webinar"
      ]
    },
    {
      title: "BUNDLING",
      type: "Rekomendasi",
      duration: "± 3 Jam",
      price: "Rp 809.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
        "Akses Webinar"
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "service-cards", children: services.map((service, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "service-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "service-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: service.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge", children: service.type })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "service-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: service.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: service.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: feature }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "service-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price", children: service.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "buy-button", children: "Pilih Paket" })
      ] })
    ] }, index2)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "next-button", onClick: () => handleStepChange(2), children: "Lanjut" })
  ] });
};
const RegisterForm = ({ handleStepChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStepChange(3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "registration-form", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-prompt", children: [
      "Sudah punya akun? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Klik di sini untuk masuk" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Nama Lengkap", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { defaultValue: "+62", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+62", children: "+62" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Nomor WhatsApp", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Jenis Kelamin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Laki-laki" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Perempuan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Tanggal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bulan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Tahun" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            placeholder: "Buat Password (minimal 5 karakter)",
            required: true,
            minLength: "5"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "note", children: [
        "Harap isi data dirimu dengan benar ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Registrasi akun MindEase diperlukan untuk memilih jadwal konsultasi."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "submit-button", children: "Lanjut" })
    ] })
  ] });
};
const ProgressBar = ({ currentStep, handleStepChange }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-bar-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "progress-title", children: "Pendaftaran Konseling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `progress-step ${currentStep >= 1 ? "active" : ""} ${currentStep > 1 ? "completed" : ""}`,
          onClick: () => handleStepChange(1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-circle", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-label", children: "Paket" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `progress-line ${currentStep > 1 ? "completed-line" : ""}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `progress-step ${currentStep >= 2 ? "active" : ""} ${currentStep > 2 ? "completed" : ""}`,
          onClick: () => handleStepChange(2),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-circle", children: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-label", children: "Profil" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `progress-line ${currentStep > 2 ? "completed-line" : ""}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `progress-step ${currentStep >= 3 ? "active" : ""}`,
          onClick: () => handleStepChange(3),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-circle", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-label", children: "Pembayaran" })
          ]
        }
      )
    ] })
  ] });
};
const Form = () => {
  const [currentStep, setCurrentStep] = reactExports.useState(1);
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(index$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProgressBar,
      {
        currentStep,
        handleStepChange
      }
    ),
    currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ServicePackage, { handleStepChange }),
    currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterForm, { handleStepChange }),
    currentStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
function RoutesIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutUs, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appointment", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Appointment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appointment/life-coach", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LifeCoach, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appointment/psychology", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Psychology, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appointment/life-coach/form", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appointment/psychology/form", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, {}) })
  ] });
}
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = b();
  reactExports.useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.5 });
    }
  }, [pathname, lenis]);
  return null;
};
const SmoothScroll = ({ children }) => {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(y, { root: true, options: lenisOptions, children });
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SmoothScroll, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoutesIndex, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {})
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
