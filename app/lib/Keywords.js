var Keywords = {
    "MagicTheGathering" : {
        "1" : {
            title : "Deathtouch",
            description : "Deathtouch is a static ability that causes a creature to be destroyed as a result of having been dealt damage by a source with deathtouch. In this way, for a creature with deathtouch, any nonzero amount of damage it deals to another creature is considered enough to kill it. One of the creatures with death touch is the common typhoid rats, available in m15, or in other sets."
        },
        "2" : {
            title : "Defender",
            description : "Defender is a static ability that means the affected permanent cannot attack. It is commonly found on creatures with low power, and high toughness, such as most walls."
        },
        "3" : {
            title : "Double Strike",
            description : "A creature with double strike deals damage during the first combat damage step alongside creatures with first strike, then additionally deal damage during the second damage step along with regular creatures."
        },
        "4" : {
            title : "Enchant",
            description : "Enchant {target} is a static ability found on auras which defines what they can enchant. The keyword is written with a quality after it (e.g. Enchant creature) which defines what the aura can enchant."
        },
        "5" : {
            title : "Equip",
            description : "Equip is an activated ability found on equipments. By paying an equip cost, you can attach an equipment to a creature you control. Equipping can only be used at sorcery speed."
        },
        "6" : {
            title : "First Strike",
            description : "First strike is a static ability that creates an additional combat damage step. A creature with first strike will deal its combat damage before a creature that doesn't."
        },
        "7" : {
            title : "Flash",
            description : "Flash is a static ability that allows the affected card to be cast at any time you could cast an instant."
        },
        "8" : {
            title : "Flying",
            description : "Creatures with the static ability flying cannot be blocked except by other creatures with either flying or creatures with the static ability reach. Creatures with flying can block other creatures with or without flying."
        },
        "9" : {
            title : "Haste",
            description : "Haste is a static ability that allows creatures to ignore the affliction informally known as 'summoning sickness'. This means that they can attack and use activated keywords with the tap symbol on the same turn they enter the battlefield."
        },
        "10" : {
            title : "Hexproof",
            description : "Hexproof is a static ability that causes the affected permanent to be unable to be targeted by spells or keywords your opponents control. Permanents with hexproof can still be targeted by spells or keywords you control."
        },
        "11" : {
            title : "Indestructible",
            description : "Indestructible is a keyword ability that means that any permanent that has indestructible cannot be destroyed, and cannot die as a result of lethal damage."
        },
        "12" : {
            title : "Intimidate",
            description : "Intimidate is a static ability which restricts the types of creatures that can block a creature with intimidate. A creature with intimidate can't be blocked, except by artifact creatures and by creatures that share a color with it."
        },
        "13" : {
            title : "Landwalk",
            description : "Landwalk is a static ability that means the affected creature cannot be blocked as long as the defending player controls a land of the specified type."
        },
        "14" : {
            title : "Lifelink",
            description : "Lifelink is a static ability that modifies the result of damage. When a card with lifelink deals damage, the controller of that card also gains an amount of life equal to the amount of damage dealt."
        },
        "15" : {
            title : "Reach",
            description : "Reach is a static ability that means the affected creature can block creatures with flying."
        },
        "16" : {
            title : "Scry",
            description : "To Scry X, a player looks at the top X cards of his library, then puts any number of them on the bottom of his library and the rest on top of his library in any order."
        },
        "17" : {
            title : "Shroud",
            description : "Shroud is a static ability that means the affected permanent or player cannot be the target of any spells or keywords."
        },
        "18" : {
            title : "Trample",
            description : "Trample is a static ability of creatures that when attacking, allows it to assign the remaining damage not taken by creatures blocking it to the defending player."
        },
        "19" : {
            title : "Vigilance",
            description : "Vigilance is a static ability that means the affected creature does not tap once declared as an attacker."
        }
    },
    "YuGiOH" : [{

    }]
};

function getAll(game) {
    return Keywords[game];
}

function findKeyword(game, searchTerm) {
    var data = {};
    var index = 0;

    for (var key in Keywords[game]) {
        if (Keywords[game][key].title.toLowerCase() == searchTerm.toLowerCase()) {
            data[index] = Keywords[game][key];
            break;
        }
    }

    return data;
}

exports.getAll = getAll;
exports.findKeyword = findKeyword; 