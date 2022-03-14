import '../styles/globals.css';
import MainLayout from 'components/mainLayout/MainLayout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
			<div id="fb-root"></div>

			<div id="fb-customer-chat" className="fb-customerchat"></div>

			<Script id="s1">
				{`var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "109087308400962");
      chatbox.setAttribute("attribution", "biz_inbox");`}
			</Script>

			<Script id="s2">
				{`      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        })
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
`}{' '}
			</Script>
		</MainLayout>
	);
}

export default MyApp;
