import Image from 'next/image';
import { Island } from './islandsummary.js';
import styles from '@/globals.module.css';

export function Map() {
    return (
    <div className={styles.mapcontainer}>
        <Image src='/map/smap.png' fill={true} sizes="100vw" alt='map. Also you suck' className={styles.map}/>
        <Island name='Myrellis' order={0} text={
                `Myrellis is a part-aquatic-based city-state that fosters a society of elite, well-established people and institutions. Fostered around an education-rooted hierarchy, the island prides itself on its prestige and academic excellence, with multiple high-standing academies, which students attend. The government is also meritocratic, run by a group of the city-state’s most educated and elite citizens.
The architecture of Myrellis reflects its status as a major trading hub, with a heavy emphasis on infrastructure that supports commerce. Key features include expansive seaports and airports, as well as lighthouses that mark the island from afar. Buildings use eaves, courtyards, and water features to stay cool. However, Myrellian architecture is also known for its elegance and intricacy, expressing the society’s values of knowledge, artistry, and innovation.
Altogether, Myrellis is a city-state of prestige, intellect, and beauty. From its rigorous academic institutions to its intricate architecture and landscapes, each part of the island reflects its values of excellence and innovation. With its  thriving population and pivotal role in trade, Myrellis continues to embody a society shaped in education, eminence, and innovation.`
            }/>
            <Island name='Umbra' order={1} text={
                "Umbra is an isolated, post-apocalyptic island, inhabited by ghosts. Originally a prosperous high society, it was mysteriously ruined hundreds of years ago, leading to anyone who dies on the island becoming a ghost. The formerly flourishing plants have mostly died, while the elaborate gothic architecture has become overgrown ruins. The island itself is shattered, with large chains holding everything together. Although almost everyone has died, there is still a government. A council judges people when they initially become ghosts, throwing those who are unfit for ghost life into a lake. The ghosts are highly religious, with the clergy holding a higher position in society. Overall, the island is merely a shell of its former self."
        }/>
        <Island name='Cryokova' order={2} text={
                "Cryokova (Кʀaиɔкɔвa), or Kova (Кɔвa) for short, is a floating island with long, snowy winters and short, humid summers due to its proximity to the South Pole and high altitude. It’s made up of two main biomes—a tundra in the mountainous north, and a taiga in the forest-covered south. An Alpine tundra occupies the center of the island, and a frozen waterfall flows off the east edge. The city-state’s main exports include cotton, furs, and minerals such as petroleum, coal, iron, cobalt, and gold. The fauna population is composed of animals that can survive cold climates, and few magical creatures remain. Cryokova is a monarchy, led by an emperor who resides in the royal palace and is offered guidance by the Council, a group of advisors selected by the empress dowager. The government is corrupt, passing acts to benefit the elite class while completely overlooking the commoners. The economy is designed to strengthen the wealthy and weaken the poor. The government also employs a military service known as the Voyna (Вɔинa), split into bodyguards who protect important elites and police who enforce order. Because of the government’s unpopular rule, many commoners have formed rebel groups. The five most powerful factions are Volshbasev (Вɔлʃбаxэв), Sofyov (Xɔфɔ̆в), Moranovich (Мɔʀaнɔвич), Akimovna (Aкимɔвнa), and Irievna (Илэ̆внa). They’re funded by foreign city-states and receive weapons in return for resources."
            }/>
            <Island name='Vyapar' order={3} text=
            "Vyapar’s people are heavily militarized & regimented, having bought into their own propaganda about the value of duty above all else. Under the mit’a system, every “non-magical” citizen has a mandatory period in the mines, army, and construction. Those with substantial magic from the beginning experience a very different kind of life - they are in charge of maintaining the force field, managing magical supplies, and running the city. They can apply to join the research community and work as an intern under a master."/>
    </div>
    )
}