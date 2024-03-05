gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal-up").forEach(function (elem) {
  var delay = parseFloat(elem.getAttribute("data-delay"));

  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 10%",
    onEnter: function () {
      gsap.fromTo(
        elem, {
          y: 80,
          autoAlpha: 0
        }, {
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
          delay: delay,
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        overwrite: "auto"
      });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem, {
          y: -80,
          autoAlpha: 0
        }, {
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        overwrite: "auto"
      });
    }
  });


});