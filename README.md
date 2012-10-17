AfterOnLoad.js
==============


AfterOnLoad.js is a JavaScript snippet for queueing functions
to be triggered on/after the window load event (aka ```window.onload```).


It has been designed with the following in mind:

*   *Compact* and intended for *inline Javacript*.
    The code is optimized for compact minification,
    so that the snippet can be added as inline JavaScript
    in the markup. Setting up ```window.onload``` handlers
    is typically bootstrap activity, where you don't want
    to lose precious page load time on network IO from
    additional JavaScript file loading.

*   *Cross browser compatibility*
    ```window.addEventListener```, ```window.attachEvent```
    or ```window.onload```? We've got it covered.

*   *No framework dependencies*.
    Just raw standard/common JavaScript.

*   It work *also after the load event* happened.
    If you call ```afterOnLoad(fun)``` after
    ```window.onload``` alread happened, the function will be
    triggered immediately.




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
