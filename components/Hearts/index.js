import React from 'react';
import dynamic from 'next/dynamic';

const Hearts = () => {
  $(function () {
    $('#button').click(function () {
      $('#button').addClass('onclic', 250, validate);
    });

    function validate() {
      setTimeout(function () {
        $('#button').removeClass('onclic');
        $('#button').addClass('validate', 450, callback);
      }, 2250);
    }
    function callback() {
      setTimeout(function () {
        $('#button').removeClass('validate');
      }, 1250);
    }

    return (
      <>
        <div className="container"> </div>

        <form action="#" method="post">
          <ul>
            <label>What did you do for self care today?</label>

            <li>
              <button shadowSize={2} id="button" type="submit">
                Click
              </button>
            </li>
          </ul>
        </form>
      </>
    );
  });
};

export default Hearts;
