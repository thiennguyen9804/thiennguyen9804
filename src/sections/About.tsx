import Globe from "react-globe.gl"
import { color } from "three/tsl"
import Button from "../components/Button"

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Hayashing</p>
              <p className="grid-subtext">With 2 years of experience, I have honed my skills in mobile and backend development, with a focus on Android Native and Cross-Platform</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" className="w-full sm:w-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Teck stack</p>
              <p className="grid-subtext">I specialize in Java, Kotlin, Dart, JavaScript/TypeScript with a focus on Android Native and Flutter</p>


            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm-h:[276px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[{
                //   lat: 40, 
                //   lng:-100, 
                //   text: "I'm here",
                //   color: 'white',
                //   size: 20
                // }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in VietNam, with remotely work available
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" className="w-full sm:h-[266px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          
        </div>
      </div>
    </section>
  )
}

export default About