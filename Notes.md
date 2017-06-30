

Bugs:

1) Style inheritance from drop and event propagation. Styling fails when more than one element is added to the same row.

    Ideas:
    Destructively remove styling with removeAttr() or .css(). (this logic is not working!)

    Console Errors:
    <!-- DOMException: Failed to execute 'appendChild' on 'Node': The new child element contains the parent. -->


2) Code test for updating userId is working asynchronously. As soon as the page loads, the AJAX request is fired. This is causing the remaining code to break.

    Ideas:
    wrap code in a promise and use await() to trigger AJAX request.
    try using beforeSend callback.



  Comments:

  - Wanted to dynamically add drag and drop functionality from window.onload event to clean up css.
  - Failed to find an improved way to append data from AJAX arrays. Current hard code is ugly and not performance compliant! Working to find a more elegant solution. Considered making a global variable to cache the data.
