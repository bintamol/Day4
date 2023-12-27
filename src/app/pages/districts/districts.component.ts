import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {

  districts: any=[

    {
  
      id:1,
      title: "Thiruvanathapuram",
      description:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries. ",
      image:"../../../assets/images/tvm2.jpg"
    },
    {
      id:2,
      title: "Palakkad",
      description:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials",
      image:"../../../assets/images/pal.jpg",
    },
  
    {
      id:3,
      title: "idukki",
      description:"Idukki is a township in Idukki district near to the district headquarter Painavu in the state of Kerala, southern India. The township consists of the towns of Cheruthoni, Painavu, Thadiyampadu, Idukki proper and Vazhathope. Idukki town is an administrative town but the district headquarters is located at Painavu ",
      image:"../../../assets/images/idukki.jpg",
    },
    
    {
      id:4,
      title: "kottayam",
      description:"Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala. ",
      image:"../../../assets/images/kot.jpg",
    },

    {
      id:5,
      title: "pathanamthitta",
      description:"Pathanamthitta District, is one of the 14 districts in the Indian state of Kerala. The district headquarters is in the town of Pathanamthitta. There are four municipalities in Pathanamthitta: Adoor, Pandalam, Pathanamthitta and Thiruvalla. ",
      image:"../../../assets/images/pat.jpg",
    },

    {
      id:6,
      title: "kozhikkod",
      description:"Kozhikode, or Calicut district, is one of the 14 districts in the Indian state of Kerala, along its Southwestern Malabar Coast. The city of Kozhikode, also known as Calicut, is the district headquarters. The district is 67.15% urbanised.Kozhikode city is the fashion capital of Kerala.",
      image:"../../../assets/images/koz.jpg",
    },

    {
      id:7,
      title: "kollam",
      description:"Kollam district, is one of 14 districts of the state of Kerala, India. The district has a cross-section of Kerala's natural attributes; it is endowed with a long coastline, a major Laccadive Sea seaport and an inland lake. The district has many water bodies.",
      image:"../../../assets/images/kollam.jpg",
    },

    {
      id:8,
      title: "kannur",
      description:"Kannur is one of the 14 districts along the west coast in the state of Kerala, India. The city of Kannur is the district headquarters and gives the district its name. The old name, Cannanore, is the anglicized form of the Malayalam name .",
      image:"../../../assets/images/kannur.jpg",
    },

    {
      id:9,
      title: "ernakulam",
      description:"Ernakulam is one of the 14 districts in the Indian state of Kerala, and takes its name from the eponymous city division in Kochi. It is situated in the central part of the state, spans an area of about 2,924 square kilometres, and is home to over 9% of Kerala's population. Its headquarters are located at Kakkanad.",
      image:"../../../assets/images/erna.jpg",
    },

    {
      id:10,
      title: "wayanad",
      description:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.",
      image:"../../../assets/images/way.jpg",
    },

    {
      id:11,
      title: "kasargod",
      description:"Kasaragod is one of the 14 districts in the southern Indian state of Kerala. Its northern border Thalappady is located just 9 km south to Ullal, which is the southernmost portion of the major port city Mangalore, on the southwestern Malabar coast of India.",
      image:"../../../assets/images/kas.jpg",
    },

    {
      id:12,
      title: "Thrissur",
      description:"Thrissur is one of the 14 districts in the Indian state of Kerala. It is situated in the central part the state. Spanning an area of about 3,032 km², Thrissur district is home to over 9% of Kerala's population.",
      image:"../../../assets/images/th.jpg",
    },

    {
      id:13,
      title: "alappuzha",
      description:"Alappuzha district, is one of the 14 districts in the Indian state of Kerala. It was formed as Alleppey district on 17 August 1957, the name of the district being changed to Alappuzha in 1990, and is the smallest district of Kerala.",
      image:"../../../assets/images/al.jpg",
    },

    {
      id:14,
      title: "malappuram",
      description:"Malappuram, is one of the 14 districts in the Indian state of Kerala, with a coastline of 70 km. It is the most populous district of Kerala, which is home to around 13% of the total population of the state. The district was formed on 16 June 1969, spanning an area of about 3,554 km².",
      image:"../../../assets/images/mala.jpg",

    },
 ]
  
  }
