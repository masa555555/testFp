import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        return `
        // CybillMBP
        <main id="js-gallery" role="main" class="gallery">
	<div class="navbar">
		<ul>
			<li><a href="/" class="nav__link" data-link>Home</a></li>
			<li><a href="/countries" class="nav__link" data-link>Countries</a></li>
		</ul>
		<div class="night-toggle" onClick="switchMode()">
			<div id="moon" class="moon"></div>
		</div>
	</div>
	<section class="main">
	<!-- Title  -->
		<div id="js-poster" class="main__gallery-poster poster">
			<div class="poster__content">
				<div class="poster__title poster__title-where">
					<h2>Where are you from?</h2>
				</div>
				<div class="poster__title poster__title-fly">
					<h2> Country</h2>
				</div>
				<div class="poster__title poster__title-fortner">
					<h2>Research</h2>
				</div>
        <!-- Poster Effects-->
				<div class="poster__graphic poster__graphic--x">
					<div class="x-1"></div>
					<div class="x-2"></div>
					<div class="x-3"></div>
					<div class="x-4"></div>
					<div class="x-5"></div>
					<div class="x-6"></div>
					<div class="x-7"></div>
					<div class="x-8"></div>
					<div class="x-9"></div>
					<div class="x-10"></div>
					<div class="x-11"></div>
					<div class="x-12"></div>
				</div>
				<div class="poster__graphic poster__graphic--y">
					<div class="y-1"></div>
					<div class="y-2"></div>
					<div class="y-3"></div>
					<div class="y-4"></div>
					<div class="y-5"></div>
					<div class="y-6"></div>
					<div class="y-7"></div>
					<div class="y-8"></div>
					<div class="y-9"></div>
					<div class="y-10"></div>
					<div class="y-11"></div>
					<div class="y-12"></div>
				</div>
        <!-- Countries: List-->
				<div class="poster__list">
					<ul>
						<li>Canada </li>
						<li>Japan </li>
                        <li>Taiwan </li>
						<li>countries </li>
                        <li>countries </li>
						<li>countries </li>
                        <li>countries </li>
						<li>countries </li>
						<li>countries </li>
						<li>countries </li>
                        <li>countries </li>
						<li>countries </li>
                    </ul>
				</div>
        <!-- Post Footer-->
				<footer class="poster__footer">
					<p>stay safe and have a nice day</p>
				</footer>
			</div>
		</div>
        `;
    }
}

