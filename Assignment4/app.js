(function(){
	var gems= [
			 { name: 'Azurite', 
			   price: 2.95, 
			   description:"Some gems have no real purpose beyond making your wife happy.....Azurite is one of them", 
			   canPurchase:true,
			   soldOut:false,
			   images:[ 
			   		"images/Azurite-1.jpg",
			   		"images/Azurite_2.jpg"


			   ]
			},
			 { name: 'Emerald', 
			   price: 5.95, 
			   description:"Other gems have very high intrinsic value.....Emerald is one of them", 
			   canPurchase:true,
			   soldOut:false,
			   images:[ 
			   		"images/Emerald-1.jpg",
			   		"images/Emerald-2.jpg"


			   ]
			},
			 { name: 'Amethyst', 
			   price: 5.90, 
			   description:"I dont like this gem", 
			   canPurchase:true,
			   soldOut:false,
			   images:[ 
			   		"images/Amethyst-1.jpg",
			   		"images/Amethyst-2.jpg"


			   ]
			},
			 { name: 'Opal', 
			   price: 4.90, 
			   description:"I dont care much for this gem", 
			   canPurchase:true,
			   soldOut:false,
			   images:[ 
			   		"images/Opal.jpg",
			   		"images/opal-2.jpg"


			   ]
			}




		];

	var app = angular.module('gemStore', []);

	app.controller('StoreController',function(){

		this.products= gems;

	});

})()