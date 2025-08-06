
import React from "react";
import './css/Footer.css';

export default function Footer() {
  return (
   <footer>
        <div class="footer-container">
            <div class="footer-left">
                <div>© 2025 by Narongsak Mueandao. All rights reserved.</div>
                
            </div>
            <div class="footer-right">
                <div class="footer-contact">
                    <div><b>Call</b><br/>097-2104212</div>
                    <div><b>Email</b><br/>narongsak_pat@hotmail.com</div>
                    <div><b>Follow</b><br/>
                        <a href="https://www.facebook.com/narongsak.muandao/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://github.com/PatNarongsak" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
