import "./Main.scss";

const Main = () => {
	return (
			<div className="container-main">
				<h1>Our blog.</h1>
				<button className="btn">Go to our blog</button>
				<div className="block">
					<div className="block-1">
						<img className="clock-img" src="src/assets/img/Vector.svg" alt="" />
						<p className="clock-text">12.09.2021</p>
						<h2 className="text-block">
							How to plant spinach correctly <br /> in winter
						</h2>
						<p className="p-text-block">
							In most areas, successive sowing can be done from early <br />{" "}
							spring until early winter, but more often during hotter <br />{" "}
							months...
						</p>
						<button className="Read-btn">Read</button>
						<img className="photo" src="src/assets/img/image 2.png" alt="" />
					</div>
					{/* block 2 */}
					<div className="block-2">
						<img className="clock-img" src="src/assets/img/Vector.svg" alt="" />
						<p className="clock-text">12.09.2021</p>
						<h2 className="text-block-2">
							How to plant spinach <br /> correctly in winter
						</h2>
						<p className="p-text-block-2">
							In most areas, successive sowing can be <br /> done from early spring
							until early winter, but <br /> more often during hotter months...
						</p>
						<button className="Read-btn">Read</button>
            <img className="photo-2" src="src/assets/img/female-gardener-holding-wicker-basket-with-strawberries 1.png" alt="" />
					</div>
          {/* block 3 */}
          <div className="block-3">
						<img className="clock-img" src="src/assets/img/Vector.svg" alt="" />
						<p className="clock-text">12.09.2021</p>
						<h2 className="text-block-3">
            How to plant spinach correctly in winter
						</h2>
						<button className="Read-btn">Read</button>
            <br />
            <img className="photo-3" src="src/assets/img/Ellipse 1.svg" alt="" />
					</div>
          {/* block 4 */}
          <div className="block-4">
						<img className="clock-img" src="src/assets/img/Vector.svg" alt="" />
						<p className="clock-text">12.09.2021</p>
						<h2 className="text-block-4">
            How to plant spinach <br /> correctly in winter
						</h2>
						<button className="Read-btn">Read</button>
            <br />
            <img className="photo-4" src="src/assets/img/Ellipse 1.svg" alt="" />
					</div>
				</div>
			</div>
	);
};

export default Main;
