import { useRouter } from 'next/router';

import Image from 'next/image'

import Link from 'next/link'


function aside() {
	const router = useRouter();
	const isActive = (href) => {
    	return router.pathname === href;
  	};

	return (
		<>
			<div className="aside-container">
				<div className="aside">
					<div className="logo">
						<Link href="/">
							<Image
								src="/images/logo.png"
								alt="Picture of the author"
								width={214}
								height={96}
								/>
						</Link>
					</div>
					<nav className="menu">
						<ul>
							<li className={isActive('/') ? 'active' : ''}>
								<Link href="/">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M2.5 7.411v10a.833.833 0 0 0 .833.833H7.5a.833.833 0 0 0 .833-.833v-5.833h3.334v5.833a.834.834 0 0 0 .833.833h4.167a.833.833 0 0 0 .833-.833v-10a.833.833 0 0 0-.333-.667l-6.667-5a.833.833 0 0 0-1 0l-6.667 5a.833.833 0 0 0-.333.667Zm1.667.417L10 3.453l5.833 4.375v8.75h-2.5v-5.833a.834.834 0 0 0-.833-.834h-5a.833.833 0 0 0-.833.834v5.833h-2.5v-8.75Z" />
									</svg>
									Dashboard
								</Link>
							</li>
							<li className={isActive('/order-list') ? 'active' : ''}>
								<Link href="/order-list">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M17.5 4.911h-15a.818.818 0 0 1-.833-.833c0-.472.361-.833.833-.833h15c.472 0 .834.36.834.833a.818.818 0 0 1-.834.833Zm-5 4.445h-10a.818.818 0 0 1-.833-.834c0-.472.361-.833.833-.833h10c.472 0 .834.361.834.833a.818.818 0 0 1-.834.834Zm5 4.444h-15a.818.818 0 0 1-.833-.833c0-.472.361-.834.833-.834h15a.82.82 0 0 1 .834.834.818.818 0 0 1-.834.833Zm-5 4.445h-10a.818.818 0 0 1-.833-.834c0-.472.361-.833.833-.833h10c.472 0 .834.361.834.833a.818.818 0 0 1-.834.834Z" />
									</svg>
									Order List
								</Link>
							</li>
							<li className={isActive('/order-detail') ? 'active' : ''}>
								<Link href="/order-detail">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M10.542 2.611a.833.833 0 0 0-.542-.2H4.167a.833.833 0 0 0-.834.834v15a.833.833 0 0 0 .834.833h11.666a.833.833 0 0 0 .834-.833v-10a.834.834 0 0 0-.292-.634l-5.833-5Zm.291 2.442 2.75 2.358h-2.75V5.053ZM15 17.411H5V4.078h4.167v4.167a.833.833 0 0 0 .833.833h5v8.333Z" />
									</svg>
									Order Detail
								</Link>
							</li>
							<li className={isActive('/customer') ? 'active' : ''}>
								<Link href="/customer">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M15.992 14.67a2.891 2.891 0 0 0 .675-1.842 2.917 2.917 0 0 0-2.917-2.917h-.233a4.541 4.541 0 0 0 1.066-2.916 4.583 4.583 0 1 0-7.558 3.475 8.333 8.333 0 0 0-5.358 7.775.833.833 0 0 0 1.666 0A6.667 6.667 0 0 1 10 11.578h1.125a2.842 2.842 0 0 0 .383 3.092 4.575 4.575 0 0 0-2.341 3.991.833.833 0 0 0 1.666 0 2.917 2.917 0 0 1 5.834 0 .833.833 0 0 0 1.666 0 4.575 4.575 0 0 0-2.341-3.991ZM10 9.91a2.917 2.917 0 1 1 0-5.833 2.917 2.917 0 0 1 0 5.833Zm3.75 4.167a1.25 1.25 0 0 1-1.25-1.25 1.258 1.258 0 0 1 1.25-1.25 1.25 1.25 0 0 1 0 2.5Z" />
									</svg>
									Customer
								</Link>
							</li>
							<li className={isActive('/analytics') ? 'active' : ''}>
								<Link href="/analytics">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M17.5 16.578H4.167V3.245a.833.833 0 0 0-1.667 0V17.41a.833.833 0 0 0 .833.834H17.5a.833.833 0 0 0 0-1.667Z" />
										<path fill="#464255" d="M5.833 9.911v4.167a.833.833 0 0 0 1.667 0V9.911a.833.833 0 1 0-1.667 0Zm3.334-4.166v8.333a.833.833 0 0 0 1.666 0V5.745a.833.833 0 1 0-1.666 0ZM12.5 7.411v6.667a.833.833 0 0 0 1.667 0V7.411a.833.833 0 1 0-1.667 0Zm3.333-4.166v10.833a.833.833 0 0 0 1.667 0V3.245a.834.834 0 0 0-1.667 0Z" />
									</svg>
									Analytics
								</Link>
							</li>
							<li className={isActive('/reviews') ? 'active' : ''}>
								<Link href="/reviews">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M2.5 19.078h3.333a.833.833 0 0 0 .592-.241l10-10a.833.833 0 0 0 0-1.184L13.092 4.32a.833.833 0 0 0-1.184 0l-10 10a.833.833 0 0 0-.241.591v3.334a.833.833 0 0 0 .833.833Zm.833-3.825L12.5 6.087l2.158 2.158-9.166 9.167H3.333v-2.159Zm11.425-12.6a.837.837 0 1 0-1.183 1.183l3.333 3.334a.834.834 0 0 0 1.366-.272.833.833 0 0 0-.182-.912l-3.334-3.333Z" />
									</svg>
									Reviews
								</Link>
							</li>
							<li>
								<Link href="/food">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M16.875 7.62h-.872l.106-1.064a1.874 1.874 0 0 0-1.865-2.061H4.506A1.875 1.875 0 0 0 2.64 6.556l.856 9.56c.017.15-.016-.16.104.44H1.73a.625.625 0 1 0 0 1.25l15.27.189a.625.625 0 0 0 0-1.25h-1.87c.053-.142.087-.289.104-.439l.207-3.061h1.434a1.877 1.877 0 0 0 1.875-1.875V9.495a1.877 1.877 0 0 0-1.875-1.875ZM5.661 16.555a.622.622 0 0 1-.621-.562l-.902-9.408a.625.625 0 0 1 .622-.688l9.26.054a.626.626 0 0 1 .622.687l-.622 9.355a.622.622 0 0 1-.621.562H5.66ZM17.5 11.37a.625.625 0 0 1-.625.625h-1.31l.313-3.125h.997a.625.625 0 0 1 .625.625v1.875Z" />
									</svg>
									Foods
								</Link>
							</li>
							<li>
								<Link href="/food-details">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M5.833 10.745v3.333a.833.833 0 0 0 .834.834H10a.833.833 0 0 0 .592-.242l6.075-6.067a2.883 2.883 0 0 0 0-4.05l-.475-.475a2.95 2.95 0 0 0-4.05 0l-6.067 6.075a.834.834 0 0 0-.242.592Zm1.667.341 5.833-5.833a1.217 1.217 0 0 1 1.667 0l.467.467a1.184 1.184 0 0 1 0 1.667L9.633 13.22H7.5v-2.134Z" />
										<path fill="#464255" d="M16.667 10.745a.833.833 0 0 0-.834.833v4.167a.833.833 0 0 1-.833.833H5a.833.833 0 0 1-.833-.833v-10A.833.833 0 0 1 5 4.91h4.167a.833.833 0 0 0 0-1.666H5a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-4.167a.833.833 0 0 0-.833-.833Z" />
									</svg>
									Food Detail
								</Link>
							</li>
							<li>
								<Link href="/customer-detail">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M12.975 10.47a4.584 4.584 0 1 0-5.95 0 8.334 8.334 0 0 0-5.358 7.774.833.833 0 0 0 1.666 0 6.667 6.667 0 1 1 13.334 0 .833.833 0 0 0 1.666 0 8.334 8.334 0 0 0-5.358-7.774ZM10 9.91a2.917 2.917 0 1 1 0-5.833 2.917 2.917 0 0 1 0 5.833Z" />
									</svg>
									Customer Detail
								</Link>
							</li>
							<li>
								<Link href="/calendar">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M5 18.245h10a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5h-.833a.833.833 0 1 0-1.667 0h-5a.833.833 0 0 0-1.667 0H5a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5Zm-.833-12.5A.833.833 0 0 1 5 4.91h.833v.834a.833.833 0 0 0 1.667 0V4.91h5v.834a.833.833 0 0 0 1.667 0V4.91H15a.833.833 0 0 1 .833.834v2.5H4.167v-2.5Zm0 4.166h11.666v5.834a.834.834 0 0 1-.833.833H5a.833.833 0 0 1-.833-.833V9.91Z" />
									</svg>
									Calendar
								</Link>
							</li>
							<li>
								<Link href="/chat">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M10 10.745a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm-3.333 0a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm6.666 0a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z" />
										<path fill="#464255" d="M2.542 18.97a1.433 1.433 0 0 0 1.092.001c.172-.072.327-.177.458-.31l2.083-2.083h7.992a4.167 4.167 0 0 0 4.166-4.167v-5a4.167 4.167 0 0 0-4.166-4.166H5.833A4.167 4.167 0 0 0 1.667 7.41v10.242a1.408 1.408 0 0 0 .875 1.317Zm.791-11.56a2.5 2.5 0 0 1 2.5-2.5h8.334a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H5.833a.831.831 0 0 0-.591.242L3.333 17.07V7.41Z" />
									</svg>
									Chat
								</Link>
							</li>
							<li>
								<Link href="/wallet">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
										<path fill="#464255" d="M4.167 18.245h11.666a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5H4.167a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5Zm12.5-6.667H12.5V9.911h4.167v1.667ZM3.333 5.745a.833.833 0 0 1 .834-.834h11.666a.833.833 0 0 1 .834.834v2.5h-5a.833.833 0 0 0-.834.833v3.333a.833.833 0 0 0 .834.834h5v2.5a.833.833 0 0 1-.834.833H4.167a.833.833 0 0 1-.834-.833v-10Z" />
									</svg>
									Wallet
								</Link>
							</li>
						</ul>
					</nav>
					<div className = "aside-banner">
						<div className = "banner-left">
							<p>Please, organize your menus through button bellow!</p>
							<button className = "btn" type="button">+Add Menus</button>
						</div>
						<div className="banner-right">
							<img src="images/bannerimg.svg" width={76} height={90} />
						</div>
					</div>
					<div className = "aside-footer">
						<div className = "admin-dashboard">Sedap Restaurant Admin Dashboard</div>
						<div className="copyright-block">
							<p>&copy; 2020 All Rights Reserved</p>
						</div>
						<div className="develop-by">
							<p>Made with <span className>♥</span> by <Link href="#">Peterdraw</Link></p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default aside;