import Image from 'next/image'
function header() {
  return (
	<>
		<header>
			<div className="top-header">
				<div className="search">
					<form>
						<input type="text" placeholder="Search here" />
						<i className="items-search fas fa-search" />
					</form>
				</div>
				<div className="right-icons">
					<div className="circle-icons">
						<div className="icon-holder">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" viewBox="0 0 28 28">
								<path fill="#2D9CDB" d="M4.667 23.333h7a2.333 2.333 0 1 0 4.666 0h7a1.167 1.167 0 1 0 0-2.333v-8.167a9.333 9.333 0 0 0-18.666 0V21a1.167 1.167 0 1 0 0 2.333ZM7 12.833a7 7 0 0 1 14 0V21H7v-8.167Z" />
							</svg>
						</div>
						<div className="text-holder">21</div>
					</div>
					<div className="circle-icons">
						<div className="icon-holder">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" viewBox="0 0 28 28">
								<path fill="#2D9CDB" d="M14 14a1.167 1.167 0 1 0 0-2.334A1.167 1.167 0 0 0 14 14Zm-4.667 0a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334Zm9.334 0a1.167 1.167 0 1 0 0-2.334 1.167 1.167 0 0 0 0 2.334Z" />
								<path fill="#2D9CDB" d="M3.558 25.515a2.008 2.008 0 0 0 1.53.002c.24-.1.458-.248.64-.434l2.917-2.916h11.188a5.833 5.833 0 0 0 5.834-5.834v-7A5.833 5.833 0 0 0 19.832 3.5H8.167a5.833 5.833 0 0 0-5.834 5.833v14.339a1.972 1.972 0 0 0 1.225 1.843ZM4.667 9.333a3.5 3.5 0 0 1 3.5-3.5h11.666a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5H8.167a1.168 1.168 0 0 0-.829.339l-2.671 2.683V9.333Z" />
							</svg>
						</div>
						<div className="text-holder">53</div>
					</div>
					<div className="circle-icons circle-icons--gift">
						<div className="icon-holder">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" viewBox="0 0 28 28">
								<path fill="#5E6C93" d="M23.625 6.125h-.875v-3.5a.874.874 0 0 0-1.3-.765L14 6 6.55 1.86a.875.875 0 0 0-1.3.765v3.5h-.875A2.628 2.628 0 0 0 1.75 8.75v2.625A2.628 2.628 0 0 0 4.375 14h.875v9.625a2.628 2.628 0 0 0 2.625 2.625h12.25a2.628 2.628 0 0 0 2.625-2.625V14h.875a2.628 2.628 0 0 0 2.625-2.625V8.75a2.628 2.628 0 0 0-2.625-2.625Zm-2.625 0h-3.623L21 4.112v2.013ZM7 4.112l3.623 2.013H7V4.112Zm0 19.513V14h6.125v10.5h-5.25A.876.876 0 0 1 7 23.625Zm14 0a.876.876 0 0 1-.875.875h-5.25V14H21v9.625Zm3.5-12.25a.876.876 0 0 1-.875.875H4.375a.876.876 0 0 1-.875-.875V8.75a.876.876 0 0 1 .875-.875h19.25a.876.876 0 0 1 .875.875v2.625Z" />
							</svg>
						</div>
						<div className="text-holder">15</div>
					</div>
					<div className="circle-icons circle-icons--setting">
						<div className="icon-holder">
							<svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" viewBox="0 0 28 28">
								<path fill="#FF5B5B" d="M14 9.625a4.375 4.375 0 1 0 0 8.751 4.375 4.375 0 0 0 0-8.751Zm0 7a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z" />
								<path fill="#FF5B5B" d="M5.49 8.56a1.77 1.77 0 0 0-1.35 3.27 2.355 2.355 0 0 1 0 4.34 1.77 1.77 0 0 0 1.35 3.27 2.355 2.355 0 0 1 3.07 3.07 1.753 1.753 0 0 0 .99 2.264 1.777 1.777 0 0 0 1.637-.148 1.73 1.73 0 0 0 .643-.766 2.355 2.355 0 0 1 4.339 0 1.77 1.77 0 0 0 3.27-1.35 2.357 2.357 0 0 1 3.072-3.07 1.75 1.75 0 0 0 2.256-.974l-.802-.349-.797-.298a4.097 4.097 0 0 0-4.45.9 4.195 4.195 0 0 0-.936 4.464A4.091 4.091 0 0 0 14 20.673a4.189 4.189 0 0 0-3.819 2.496 4.098 4.098 0 0 0-.9-4.45 4.196 4.196 0 0 0-4.464-.936A4.092 4.092 0 0 0 7.327 14a4.189 4.189 0 0 0-2.496-3.819 4.097 4.097 0 0 0 4.45-.9 4.196 4.196 0 0 0 .936-4.464A4.092 4.092 0 0 0 14 7.327a4.189 4.189 0 0 0 3.819-2.496 4.098 4.098 0 0 0 .9 4.45 4.198 4.198 0 0 0 4.464.936 4.097 4.097 0 0 0-.027 7.544.035.035 0 0 1 0 .022l.808.334.804.345.005-.011a1.747 1.747 0 0 0-.913-2.281 2.356 2.356 0 0 1 0-4.339 1.77 1.77 0 0 0-1.35-3.27 2.356 2.356 0 0 1-3.07-3.072 1.77 1.77 0 0 0-3.27-1.35 2.355 2.355 0 0 1-4.339 0 1.77 1.77 0 0 0-3.27 1.35A2.356 2.356 0 0 1 5.49 8.56Z" />
							</svg>
						</div>
						<div className="text-holder">19</div>
					</div>
				</div>
				<div className="dashboard-user">
					<div className="user-info">
						<p>Hello,<strong>Samantha</strong></p>
					</div>
					<div className="image-holder">
						<Image src="/images/user.jpg" alt="image" width={56} height={56} />
					</div>
				</div>
			</div>
			<div className="middle-header">
				<div className="custom-container">
					<div className="left-content">
						<h6>Dashboard</h6>
						<p>Hi, Samantha. Welcome back to Sedap Admin!</p>
					</div>
					<div className="right-content">
						<button className="btn" type="button">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} fill="none" viewBox="0 0 34 34">
									<path fill="#2D9CDB" d="M8.5 29.75h17a4.25 4.25 0 0 0 4.25-4.25v-17a4.25 4.25 0 0 0-4.25-4.25h-1.417a1.417 1.417 0 1 0-2.833 0h-8.5a1.417 1.417 0 0 0-2.833 0H8.5A4.25 4.25 0 0 0 4.25 8.5v17a4.25 4.25 0 0 0 4.25 4.25ZM7.083 8.5A1.417 1.417 0 0 1 8.5 7.083h1.417V8.5a1.417 1.417 0 1 0 2.833 0V7.083h8.5V8.5a1.417 1.417 0 0 0 2.833 0V7.083H25.5A1.416 1.416 0 0 1 26.917 8.5v4.25H7.083V8.5Zm0 7.083h19.834V25.5a1.417 1.417 0 0 1-1.417 1.417h-17A1.417 1.417 0 0 1 7.083 25.5v-9.917Z" />
								</svg>
							</div>
							<div className="content-date">
								<div className="text">Filter Periode</div>
								<div className="date">17 April 2020 - 21 May 2020</div>
								<label htmlFor="dropdown-toggle" className="dropdown-label">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
										<path fill="#B9BBBD" d="M11.989 16.472a.89.89 0 0 1-.617-.256L2.645 7.489a.873.873 0 0 1 1.234-1.234l8.11 8.11 8.11-8.11a.875.875 0 0 1 1.436.276.873.873 0 0 1-.202.958l-8.727 8.727a.891.891 0 0 1-.617.256Z" />
									</svg>
								</label>
							</div>
						</button>
					</div>
				</div>
			</div>
		</header>
	</>
  )
}

export default header