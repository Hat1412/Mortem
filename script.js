img = document.getElementById("Image")
mes = document.getElementById("Text")
d = {
    0: ["You die of Old Age, How Boring !!", "old_age.jpg"],
    1: ["The Grim Reaper fell in love with you and lopped your head clean off", "Grim_Reaper.jpg"],
    2: ["God hates you so smited you without a second thought", "Zeus_lightning.jpg"],
    3: ["Emotional Damage Overload !! Were you Asian ?", "emd.jpg"],
    4: ["You died from a overdose, Peer Pressure kills", "od.jpg"],
    5: ["Your spouse kills you for your life insurance Ouch !!", "spouse.jpg"],
    6: ["You were an amazing Chemist on the road to cure cancer but died from cyanide poisoning", "cyanide.jpg"],
    7: ["You tripped on the stairs and cracked your skull open. The photo went viral on r/facepalm","face_palm.jpg"]
}
num = Math.floor(Math.random() * Object.values(d).length)
mes.innerHTML = d[num][0]
img.src = d[num][1]