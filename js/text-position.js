gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-fade-left").forEach(function (elem) {
  var delay = parseFloat(elem.getAttribute("data-delay"));

  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 0%",
    onEnter: function () {
      gsap.fromTo(
        elem, {
          x: -100,
          autoAlpha: 0
        }, {
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
          overwrite: "auto",
          delay: delay,
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, {
        x: 0,
        autoAlpha: 1
      }, {
        duration: 0.8,
        x: -100,
        ease: "ease-in-out",
        autoAlpha: 0,
        overwrite: "auto"
      });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem, {
          x: -100,
          autoAlpha: 0
        }, {
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, {
        x: 0,
        autoAlpha: 1
      }, {
        duration: 0.8,
        x: -100,
        ease: "ease-in-out",
        autoAlpha: 0,
        overwrite: "auto"
      });
    }
  });


});

gsap.utils.toArray(".text-fade-right").forEach(function (elem) {
  var delay = parseFloat(elem.getAttribute("data-delay"));

  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 0%",
    onEnter: function () {
      gsap.fromTo(
        elem, {
          x: 100,
          autoAlpha: 0
        }, {
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
          overwrite: "auto",
          delay: delay,
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, {
        x: 0,
        autoAlpha: 1
      }, {
        duration: 0.8,
        x: 100,
        ease: "ease-in-out",
        autoAlpha: 0,
        overwrite: "auto"
      });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem, {
          x: 100,
          autoAlpha: 0
        }, {
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, {
        x: 0,
        autoAlpha: 1
      }, {
        duration: 0.8,
        x: 100,
        ease: "ease-in-out",
        autoAlpha: 0,
        overwrite: "auto"
      });
    }
  });


});