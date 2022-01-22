import React from 'react'

export default function Footer() {
    return (
        <footer className="site-footer">
      <div className="container">
        

        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4 text-white">About</h3>
            <p>This is Your full CrossFit App with the best analytics you can find. We do our best to give you 
                full experience  with CrossFit. Feel free to share your results with us ! :)
            </p>
            <p>
                If you liked our App contact me to start working for you<br></br>
                number : 0524699066<br></br>
                Email : yarden9826@gmail.com<br></br>
                Facebook : Yarden Ben Dahan<br></br>
                IG : yarden_bd
            </p>
            <p><a href="#" className="btn btn-primary rounded text-white px-4">Read More</a></p>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="row">
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Trainers</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">The Club</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
              </div>
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Program</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Body Building</a></li>
                    <li><a href="#">Morning Energy</a></li>
                    <li><a href="#">Stretching</a></li>
                    <li><a href="#">Weight Lifting</a></li>
                  </ul>
              </div>
            </div>
          </div>

          
          <div className="col-md-2">
            <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
              <div className="col-md-12">
                <p>
                  <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                  <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                  <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                  <a href="#" className="p-2"><span className="icon-vimeo"></span></a>

                </p>
              </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
          
            Copyright &copy; <script>document.write(new Date().getFullYear());</script> All Rights Reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
          
            </p>
          </div>
          
        </div>
      </div>
    </footer>
    )
}
