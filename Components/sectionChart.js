import Image from 'next/image'

function sectionChart() {
    return (
        <>
            <div className="section-chart">
				<div className="chart-box">
					<div className="chart ">
						<div className="top-part">
							<div className="left">
								<h2>pie-chart</h2>
							</div>
							<div className="right">
								<input type="checkbox" name="cart" id="cart" />
								<label htmlFor="cart">Cart</label>
								<input type="checkbox" name="show" id="show" />
								<label htmlFor="show">Show <span className="color" /></label>
							</div>
						</div>
						<div className="pie">
							<Image src="/images/gauge011.jpg" alt width={153} height={200} />
							<Image src="/images/gauge022.jpg" alt width={153} height={200} />
							<Image src="/images/gauge033.jpg" alt width={153} height={200} />
						</div>
					</div>
					<div className="chart">
						<div className="top-part top-part--order">
							<div className="left left--order">
								<h2>Chart Order</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adip</p>
							</div>
							<div className="right right--order">
								<button className="btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path fill="#2D9CDB" d="M21 19H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2ZM12 2a1 1 0 0 0-1 1v10.59l-3.29-3.3a1.004 1.004 0 1 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1.005 1.005 0 0 0-1.42-1.42L13 13.59V3a1 1 0 0 0-1-1Z"/>
								</svg>Save Report</button>
								
							</div>
						</div>
						<div className="diagram">
							<Image src="/images/graph2.png" width={456} height={430} />
						</div>
					</div>
				</div>
			</div>
        </>
    )
}
export default sectionChart;