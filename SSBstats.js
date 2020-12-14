var characterStats = [ 
    {
        name: 'Zero Suit Samus',
        power: 'Moderate',
        highTier: true
    },
    {
        name: 'Wolf',
        power: 'High',
        highTier: false
    },
    {
        name: 'Pikachu',
        power: 'Low',
        highTier: true
    }];

for (var i = 0; i < characterStats.length; i++) 
   {
    var tier = "'" + characterStats[i].name + " ' " + ' power: ' + characterStats[i].power + ".";
    if (characterStats[i].highTier) {
      console.log("This is a high tier character "  + tier);
    } else
    {
     console.log("This is a low tier character " + tier);
    }
   }