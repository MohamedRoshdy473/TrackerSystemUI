import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asset } from 'src/Shared/Models/asset';
import { AssetService } from 'src/Shared/Services/asset.service';

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.css']
})
export class AddAssetsComponent implements OnInit {

  lstassets:asset[]
  assetObj:asset
  constructor(private router: Router,private assetservice:AssetService) { }

  ngOnInit(): void {
    this.assetObj = {
      id:0,assetName:'',assetCode:''
    }
    this.assetservice.GetAllAssets().subscribe(e=>{
      this.lstassets = e
    })
  }
  SaveDepToDB(){
    this.assetservice.inserAsset(this.assetObj).subscribe(e=>{
      console.log(this.assetObj),this.router.navigate(['home/DisplayAssets']);

    })
  }
}
