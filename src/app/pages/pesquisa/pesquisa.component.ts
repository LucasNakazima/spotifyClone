import { Component, HostListener, OnInit } from '@angular/core';
import { iPesquisa } from 'src/app/interfaces/iPesquisa';
import { SpotifyServicesService } from 'src/app/services/spotify-services.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  pesquisa: iPesquisa
  
  constructor(private spotifyService: SpotifyServicesService) { }
  
  @HostListener('keyup.Enter')
  ngOnInit(): void {
    this.buscarPesquisa()

  }

  async buscarPesquisa() {
    setTimeout(() =>{
      this.pesquisa = this.spotifyService.pesquisa

    },2000)


  }

}