AfterOnLoad.js
==============


AfterOnLoad.js is a JavaScript snippet for queueing functions
to be triggered on/after the window load event (aka ```window.onload```).


It has been designed with the following in mind:

*   *Compact* and intended for *inline Javacript*.
    The code is optimized for compact minification,
    so that the snippet can be added in an
    inline JavaScript block in your markup.
    Setting up ```window.onload``` handlers
    is typically bootstrap activity, where you don't want
    to lose precious page load time on network IO from
    additional JavaScript file loading.

*   *No framework dependencies or interference*.
    Just raw, standard/common JavaScript.

*   *Cross browser compatibility*:
    ```window.addEventListener``` (Firefox, Webkit, Opera),
    ```window.attachEvent``` (IE)
    or fall back on ```window.onload``` piggybacking?
    We've got it covered.

*   It *also works after the load event* has happened.
    If you call ```afterOnLoad(fun)``` after
    ```window.onload``` alread happened, the function will be
    triggered immediately, as there is nothing to wait for.



Usage
-----

AfterOnLoad.js is intended to be used as an inline JavaScript
snippet or as part of a bigger bootstrap script.
It's just too small to be loaded as a separate script file.

Just copy the minified snippet in your bootstrap code:

```javascript
afterOnLoad=function(e,t,n,r,i){var s=function(s){if(typeof e[n]===i)e[n]("load",s,!1);else if(typeof e[r]===i)e[r](t,s);else{var o=e[t];typeof o!==i?e[t]=s:e[t]=function(e){o(e),s(e)}}},o=!1;return s(function(){o=!0}),function(e){o?e():s(e)}}(window,"onload","addEventListener","attachEvent","function");
```
And optionally change the function name to suit your needs.

Queue one or more functions as follows:

```javascript
function zazalo() {
    alert('We are after onload now.');
}

afterOnLoad(zazalo);
```

Licence
-------

Do whatever you want. Stealing is bad. Attribution is nice.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
