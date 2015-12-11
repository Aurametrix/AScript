/ Copyright (c) 2012 The Chromium Authors. All rights reserved.
2	// Use of this source code is governed by a BSD-style license that can be
3	// found in the LICENSE file.
4	
5	/**
6	 * Add your Analytics tracking ID here.
7	 */
8	var _AnalyticsCode = 'UA-XXXXXX-X';
9	
10	/**
11	 * Below is a modified version of the Google Analytics asynchronous tracking
12	 * code snippet.  It has been modified to pull the HTTPS version of ga.js
13	 * instead of the default HTTP version.  It is recommended that you use this
14	 * snippet instead of the standard tracking snippet provided when setting up
15	 * a Google Analytics account.
16	 */
17	var _gaq = _gaq || [];
18	_gaq.push(['_setAccount', _AnalyticsCode]);
19	_gaq.push(['_trackPageview']);
20	
21	(function() {
22	  var ga = document.createElement('script');
23	  ga.type = 'text/javascript';
24	  ga.async = true;
25	  ga.src = 'https://ssl.google-analytics.com/ga.js';
26	  var s = document.getElementsByTagName('script')[0];
27	  s.parentNode.insertBefore(ga, s);
28	})();
29	
30	/**
31	 * Track a click on a button using the asynchronous tracking API.
32	 *
33	 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
34	 * for information on how to use the asynchronous tracking API.
35	 */
36	function trackButtonClick(e) {
37	  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
38	}
39	
40	/**
41	 * Now set up your event handlers for the popup's `button` elements once the
42	 * popup's DOM has loaded.
43	 */
44	document.addEventListener('DOMContentLoaded', function () {
45	  var buttons = document.querySelectorAll('button');
46	  for (var i = 0; i < buttons.length; i++) {
47	    buttons[i].addEventListener('click', trackButtonClick);
48	  }
49	});
