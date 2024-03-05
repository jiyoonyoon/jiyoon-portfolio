gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-fade").forEach(function (elem) {
  var delay = parseFloat(elem.getAttribute("data-delay"));

  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 0%",
    onEnter: function () {
      gsap.fromTo(
        elem, {
          y: 10,
          autoAlpha: 0
        }, {
          duration: 1.2,
          y: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
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
          y: -10,
          autoAlpha: 0
        }, {
          duration: 1.2,
          y: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
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