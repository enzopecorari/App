<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>web-socket-js/swfobject.js at master · gimite/web-socket-js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="g6EY4z28AdGWsV6lPdjEkrWQL/D51EjZCFPp4ypAWHU=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-e2fb92c4dcb5e5b1ce2ffd0e84d6bf80937d9197.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-d60e8ff9ae61ed2bf441f513d94ebd6d6145dd55.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-225576cef50ef2097c9f9fbcd8953c1572544611.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-353ded132c604f1bdf010516392d71052f37ffcf.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js'>
    <meta property="og:title" content="web-socket-js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/gimite/web-socket-js"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329921026"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="web-socket-js - HTML5 Web Socket implementation powered by Flash"/>

    <meta name="description" content="web-socket-js - HTML5 Web Socket implementation powered by Flash" />
  <link href="https://github.com/gimite/web-socket-js/commits/master.atom" rel="alternate" title="Recent Commits to web-socket-js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux vis-public env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1329921026" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1329921026" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1329921026" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1329921026" />
          </a>

                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fgimite%2Fweb-socket-js%2Fblob%2Fmaster%2Fswfobject.js">Login</a></li>
    </ul>



          
        </div>
      </div>

      

            <div class="site" itemscope itemtype="http://schema.org/WebPage">
      <div class="container">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


          <li><a href="/login?return_to=%2Fgimite%2Fweb-socket-js" class="minibutton btn-watch watch-button entice tooltipped leftwards" rel="nofollow" title="You must be logged in to use this feature"><span><span class="icon"></span>Watch</span></a></li>
          <li><a href="/login?return_to=%2Fgimite%2Fweb-socket-js" class="minibutton btn-fork fork-button entice tooltipped leftwards" rel="nofollow" title="You must be logged in to use this feature"><span><span class="icon"></span>Fork</span></a></li>


      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/gimite/web-socket-js/watchers" title="Watchers" class="tooltipped downwards">
              1,248
            </a>
          </li>
          <li class="forks">
            <a href="/gimite/web-socket-js/network" title="Forks" class="tooltipped downwards">
              79
            </a>
          </li>
        </ul>
      </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <span class="mini-icon public-repo"></span>
<a href="/gimite" itemprop="url">            <span itemprop="title">gimite</span>
            </a> /
            <strong><a href="/gimite/web-socket-js" class="js-current-repository">web-socket-js</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/gimite/web-socket-js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/gimite/web-socket-js/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/gimite/web-socket-js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/gimite/web-socket-js/issues" highlight="repo_issues">Issues <span class='counter'>7</span></a></li>

      <li><a href="/gimite/web-socket-js/wiki" highlight="repo_wiki">Wiki <span class='counter'>1</span></a></li>

    <li><a href="/gimite/web-socket-js/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/gimite/web-socket-js/tree-list/2ee87e910e92f2366d562efebbbec96349924df3"
      data-blob-url-prefix="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/gimite/web-socket-js">web-socket-js</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/gimite/web-socket-js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input name="utf8" type="hidden" value="&#x2713;" />
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/gimite/web-socket-js/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/gimite/web-socket-js/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-filterable-commitishes">
            <div class="filterbar">
              <div class="placeholder-field js-placeholder-field">
                <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
              </div>

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/gimite/web-socket-js/blob/hixie-76/swfobject.js" data-name="hixie-76" rel="nofollow">hixie-76</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/gimite/web-socket-js/blob/master/swfobject.js" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>


            <div class="no-results" style="display:none">Nothing to show</div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/gimite/web-socket-js" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/gimite/web-socket-js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/gimite/web-socket-js/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views7/v8/blob:v19:81cbb2b59bd9296009b2b5aa8542c938 -->
  <div id="slider">

    <div class="breadcrumb" data-path="swfobject.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gimite/web-socket-js/tree/2ee87e910e92f2366d562efebbbec96349924df3" class="js-rewrite-sha" itemprop="url"><span itemprop="title">web-socket-js</span></a></b> / <strong class="final-path">swfobject.js</strong> <span class="js-clippy clippy-button " data-clipboard-text="swfobject.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="swfobject.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/mcav">mcav</a></span>
        <time class="js-relative-date" datetime="2010-02-28T17:12:32-08:00" title="2010-02-28 17:12:32">February 28, 2010</time>
        <div class="commit-title">
            <a href="/gimite/web-socket-js/commit/a2f5f7716f5ea71c9f8c7e9fa5c9d4f3f3ef15a3" class="message">Undo the hasty fix to swfobject by mistake.</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
              <a class="avatar tooltipped downwards" title="mcav" href="/gimite/web-socket-js/commits/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js?author=mcav"><img height="20" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gimite" href="/gimite/web-socket-js/commits/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js?author=gimite"><img height="20" src="https://secure.gravatar.com/avatar/bdf55e4b2948b8351e4536b1892e0c8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/4ed1b9aa1d9562bc758f17e7b618bc16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/mcav">mcav</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/bdf55e4b2948b8351e4536b1892e0c8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/gimite">gimite</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="swfobject.js/" data-permalink-url="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" data-title="web-socket-js/swfobject.js at 2ee87e910e92f2366d562efebbbec96349924df3 · gimite/web-socket-js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>4 lines (4 sloc)</span>
                <span>10.22 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/gimite/web-socket-js/edit/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" data-method="post" rel="nofollow"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/gimite/web-socket-js/raw/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/gimite/web-socket-js/blame/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/gimite/web-socket-js/commits/2ee87e910e92f2366d562efebbbec96349924df3/swfobject.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*	SWFObject v2.2 &lt;http://code.google.com/p/swfobject/&gt; </div><div class='line' id='LC2'>	is released under the MIT License &lt;http://www.opensource.org/licenses/mit-license.php&gt; </div><div class='line' id='LC3'>*/</div><div class='line' id='LC4'>var swfobject=function(){var D=&quot;undefined&quot;,r=&quot;object&quot;,S=&quot;Shockwave Flash&quot;,W=&quot;ShockwaveFlash.ShockwaveFlash&quot;,q=&quot;application/x-shockwave-flash&quot;,R=&quot;SWFObjectExprInst&quot;,x=&quot;onreadystatechange&quot;,O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&amp;&amp;typeof j.getElementsByTagName!=D&amp;&amp;typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,&quot;$1&quot;)):false,X=!+&quot;\v1&quot;,ag=[0,0,0],ab=null;if(typeof t.plugins!=D&amp;&amp;typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&amp;&amp;!(typeof t.mimeTypes!=D&amp;&amp;t.mimeTypes[q]&amp;&amp;!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,&quot;$1&quot;);ag[0]=parseInt(ab.replace(/^(.*)\..*$/,&quot;$1&quot;),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,&quot;$1&quot;),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,&quot;$1&quot;),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable(&quot;$version&quot;);if(ab){X=true;ab=ab.split(&quot; &quot;)[1].split(&quot;,&quot;);ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&amp;&amp;j.readyState==&quot;complete&quot;)||(typeof j.readyState==D&amp;&amp;(j.getElementsByTagName(&quot;body&quot;)[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener(&quot;DOMContentLoaded&quot;,f,false)}if(M.ie&amp;&amp;M.win){j.attachEvent(x,function(){if(j.readyState==&quot;complete&quot;){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll(&quot;left&quot;)}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName(&quot;body&quot;)[0].appendChild(C(&quot;span&quot;));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y&lt;X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener(&quot;load&quot;,Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener(&quot;load&quot;,Y,false)}else{if(typeof O.attachEvent!=D){i(O,&quot;onload&quot;,Y)}else{if(typeof O.onload==&quot;function&quot;){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName(&quot;body&quot;)[0];var aa=C(r);aa.setAttribute(&quot;type&quot;,q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable(&quot;$version&quot;);if(ab){ab=ab.split(&quot; &quot;)[1].split(&quot;,&quot;);M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y&lt;10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag&gt;0){for(var af=0;af&lt;ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]&gt;0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&amp;&amp;!(M.wk&amp;&amp;M.wk&lt;312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&amp;&amp;A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute(&quot;width&quot;)||&quot;0&quot;;ai.height=ae.getAttribute(&quot;height&quot;)||&quot;0&quot;;if(ae.getAttribute(&quot;class&quot;)){ai.styleclass=ae.getAttribute(&quot;class&quot;)}if(ae.getAttribute(&quot;align&quot;)){ai.align=ae.getAttribute(&quot;align&quot;)}var ah={};var X=ae.getElementsByTagName(&quot;param&quot;);var ac=X.length;for(var ad=0;ad&lt;ac;ad++){if(X[ad].getAttribute(&quot;name&quot;).toLowerCase()!=&quot;movie&quot;){ah[X[ad].getAttribute(&quot;name&quot;)]=X[ad].getAttribute(&quot;value&quot;)}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&amp;&amp;typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&amp;&amp;Y.nodeName==&quot;OBJECT&quot;){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&amp;&amp;F(&quot;6.0.65&quot;)&amp;&amp;(M.win||M.mac)&amp;&amp;!(M.wk&amp;&amp;M.wk&lt;312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName==&quot;OBJECT&quot;){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&amp;&amp;parseInt(aa.width,10)&lt;310)){aa.width=&quot;310&quot;}if(typeof aa.height==D||(!/%$/.test(aa.height)&amp;&amp;parseInt(aa.height,10)&lt;137)){aa.height=&quot;137&quot;}j.title=j.title.slice(0,47)+&quot; - Flash Player Installation&quot;;var ad=M.ie&amp;&amp;M.win?&quot;ActiveX&quot;:&quot;PlugIn&quot;,ac=&quot;MMredirectURL=&quot;+O.location.toString().replace(/&amp;/g,&quot;%26&quot;)+&quot;&amp;MMplayerType=&quot;+ad+&quot;&amp;MMdoctitle=&quot;+j.title;if(typeof ab.flashvars!=D){ab.flashvars+=&quot;&amp;&quot;+ac}else{ab.flashvars=ac}if(M.ie&amp;&amp;M.win&amp;&amp;ae.readyState!=4){var Y=C(&quot;div&quot;);X+=&quot;SWFObjectNew&quot;;Y.setAttribute(&quot;id&quot;,X);ae.parentNode.insertBefore(Y,ae);ae.style.display=&quot;none&quot;;(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&amp;&amp;M.win&amp;&amp;Y.readyState!=4){var X=C(&quot;div&quot;);Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display=&quot;none&quot;;(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C(&quot;div&quot;);if(M.win&amp;&amp;M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z&lt;X;Z++){if(!(ad[Z].nodeType==1&amp;&amp;ad[Z].nodeName==&quot;PARAM&quot;)&amp;&amp;!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&amp;&amp;M.wk&lt;312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&amp;&amp;M.win){var ah=&quot;&quot;;for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()==&quot;data&quot;){ag.movie=ai[ae]}else{if(ae.toLowerCase()==&quot;styleclass&quot;){ah+=' class=&quot;'+ai[ae]+'&quot;'}else{if(ae.toLowerCase()!=&quot;classid&quot;){ah+=&quot; &quot;+ae+'=&quot;'+ai[ae]+'&quot;'}}}}}var af=&quot;&quot;;for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='&lt;param name=&quot;'+ad+'&quot; value=&quot;'+ag[ad]+'&quot; /&gt;'}}aa.outerHTML='&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;'+ah+&quot;&gt;&quot;+af+&quot;&lt;/object&gt;&quot;;N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute(&quot;type&quot;,q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()==&quot;styleclass&quot;){Z.setAttribute(&quot;class&quot;,ai[ac])}else{if(ac.toLowerCase()!=&quot;classid&quot;){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&amp;&amp;ab.toLowerCase()!=&quot;movie&quot;){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C(&quot;param&quot;);aa.setAttribute(&quot;name&quot;,X);aa.setAttribute(&quot;value&quot;,Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&amp;&amp;X.nodeName==&quot;OBJECT&quot;){if(M.ie&amp;&amp;M.win){X.style.display=&quot;none&quot;;(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]==&quot;function&quot;){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(&quot;.&quot;);X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]&gt;X[0]||(Y[0]==X[0]&amp;&amp;Y[1]&gt;X[1])||(Y[0]==X[0]&amp;&amp;Y[1]==X[1]&amp;&amp;Y[2]&gt;=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&amp;&amp;M.mac){return}var aa=j.getElementsByTagName(&quot;head&quot;)[0];if(!aa){return}var X=(ad&amp;&amp;typeof ad==&quot;string&quot;)?ad:&quot;screen&quot;;if(ab){n=null;G=null}if(!n||G!=X){var Z=C(&quot;style&quot;);Z.setAttribute(&quot;type&quot;,&quot;text/css&quot;);Z.setAttribute(&quot;media&quot;,X);n=aa.appendChild(Z);if(M.ie&amp;&amp;M.win&amp;&amp;typeof j.styleSheets!=D&amp;&amp;j.styleSheets.length&gt;0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&amp;&amp;M.win){if(n&amp;&amp;typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&amp;&amp;typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+&quot; {&quot;+Y+&quot;}&quot;))}}}function w(Z,X){if(!m){return}var Y=X?&quot;visible&quot;:&quot;hidden&quot;;if(J&amp;&amp;c(Z)){c(Z).style.visibility=Y}else{v(&quot;#&quot;+Z,&quot;visibility:&quot;+Y)}}function L(Y){var Z=/[\\\&quot;&lt;&gt;\.;]/;var X=Z.exec(Y)!=null;return X&amp;&amp;typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&amp;&amp;M.win){window.attachEvent(&quot;onunload&quot;,function(){var ac=I.length;for(var ab=0;ab&lt;ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa&lt;Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&amp;&amp;ab&amp;&amp;X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&amp;&amp;!(M.wk&amp;&amp;M.wk&lt;312)&amp;&amp;ab&amp;&amp;ah&amp;&amp;ae&amp;&amp;ag&amp;&amp;Y){w(ah,false);K(function(){ae+=&quot;&quot;;ag+=&quot;&quot;;var aj={};if(af&amp;&amp;typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&amp;&amp;typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&amp;&amp;typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+=&quot;&amp;&quot;+ai+&quot;=&quot;+Z[ai]}else{am.flashvars=ai+&quot;=&quot;+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&amp;&amp;A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&amp;&amp;A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split(&quot;?&quot;)[1]}if(aa==null){return L(Z)}var Y=Z.split(&quot;&amp;&quot;);for(var X=0;X&lt;Y.length;X++){if(Y[X].substring(0,Y[X].indexOf(&quot;=&quot;))==aa){return L(Y[X].substring((Y[X].indexOf(&quot;=&quot;)+1)))}}}return&quot;&quot;},expressInstallCallback:function(){if(a){var X=c(R);if(X&amp;&amp;l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&amp;&amp;M.win){l.style.display=&quot;block&quot;}}if(E){E(B)}}a=false}}}}();</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/gimite/web-socket-js/tree-list/2ee87e910e92f2366d562efebbbec96349924df3" data-blob-url-prefix="/gimite/web-socket-js/blob/2ee87e910e92f2366d562efebbbec96349924df3">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329921026" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.07230s from fe14.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329921026" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1329921026" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1329921026" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.07507' data-host='fe14'></span>
  </body>
</html>