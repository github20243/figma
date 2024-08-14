import "./Header.scss";

const Header = () => {
	return (
		<div className="container-header">
			<div className="content-header">
				<h1 className="title-text">
					SEE
					<img src="src/assets/icon/Vector (2).svg" alt="Логотип" />
					RA
				</h1>

				<ul className="nav-list">
					<li>ВСЕ ПРОДУКТЫ</li>
					<li>О SEEDRA</li>
					<li>НАШ БЛОГ</li>
					<li>КОНТАКТЫ</li>
				</ul>

				<div className="actions">
					<div className="social-icons">
						<img
							src="src/assets/icon/ant-design_instagram-filled.svg"
							alt="Instagram"
						/>
						<img
							src="src/assets/icon/akar-icons_facebook-fill.svg"
							alt="Facebook"
						/>
					</div>

					<div className="search-container">
						<img
							src="src/assets/icon/Vector (3).svg"
							alt="Search"
							className="search-icon"
						/>
						<input type="text" className="search-input" placeholder="Поиск" />
					</div>

					<img
						src="src/assets/icon/Outline.svg"
						alt="Wishlist"
						className="wishlist-icon"
					/>
					<img
						src="src/assets/icon/Vector (1).svg"
						alt="Cart"
						className="cart-icon"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
