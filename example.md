
	<div id="id_contact" class="contact container-fluid">
		<div class="container">
			<div class="contactForm row">

				<div class="headLine col-12">
					<h1 class="text-center">Contact Us</h1>
					<hr>
				</div>

				<form id="id_form" class="col-md-6" action="#">

					<label for="">First name</label>
					<br />
					<input id="id_first" type="text" placeholder="Enter Your First name" />
					<span id="name"></span>
					<br />

					<label for="">Last name</label>
					<br />
					<input id="id_last" type="text" placeholder="Enter Your Last name" />
					<span id="last"></span>
					<br />

					<label for="">email</label>
					<br />
					<input id="id_mail" type="email" placeholder="Enter Your Email" />
					<span id="mail"></span>
					<br />

					<label for="">Massage</label>
					<br />
					<textarea id="id_massage"
						placeholder="have Any questions? Please write a message and we will be happy to answer it as soon as possible"></textarea>
					<span id="mas"></span>
					<br>
					<button id="id_form_btn" onClick="onSubClick(event)">Submit</button>
					<br>
					<span id="subSpan"></span>
				</form>

				<div class="contactImg col-md-6">
					<img src="images/logoIcon.png" alt="" width="100%">
				</div>

			</div>
		</div>
	</div>