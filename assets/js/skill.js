$(document).ready(function () {
    $('.skill-box').find('b').each(function (i) {
      return $(this).prop('Counter', 0).animate({
        Counter: $(this).parent().data('percent')
      }, {
        duration: 1000,
        easing: 'swing',
        step(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });
  
    return $('.skill-box .skills-circle li').each(function (i) {
      const _right = $(this).find('.bar-circle-right');
      const _left = $(this).find('.bar-circle-left');
      const _percent = $(this).attr('data-percent');
      let deg = 3.6 * _percent;
      if (_percent <= 50) {
        return _right.animate({
          circle_rotate: deg
        }, {
          step(deg) {
            $(this).css('transform', `rotate(${deg}deg)`);
          },
          duration: 1000
        });
      } else {
        const full_deg = 180;
        deg -= full_deg;
        let run_duration = 1000 * (50 / _percent);
        return _right.animate({
          circle_rotate: full_deg
        }, {
          step(full_deg) {
            $(this).css('transform', `rotate(${full_deg}deg)`);
          },
          duration: run_duration,
          easing: 'linear',
          complete() {
            run_duration -= 1000;
            _left.css({
              'clip': 'rect(0, 150px, 150px, 75px)',
              'background': '#B0DAB9'
            });
            return _left.animate({
              circle_rotate: deg
            }, {
              step(deg) {
                $(this).css('transform', `rotate(${deg}deg)`);
              },
              duration: Math.abs(run_duration),
              easing: 'linear'
            });
          }
        });
      }
    });
  });