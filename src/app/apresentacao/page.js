import { Box, Container, AppShellHeader} from "@mantine/core";
import MOCK_AGENDA from "@/__mocks__/agenda";
import SimpleCard from "@/components/simple_card";
import ScheduleCard from "@/components/schedule_card";

const Page = () => {
    return (
    <>
        <flex className="flex justify-end">
        <object data="/fundo-onda.svg" type="image/svg+xml" className="absolute -z-50 w-[45vw]"></object>
        </flex>

        <Container className="mt-[13rem] h-60vh flex justify-around items-center">
            <h2 className={"text-[60px] font-bold"}> Robótica<br></br> e Programação </h2>
            <img src="/robo-home.png" alt="Robo Home" width="200"></img>
        </Container>

        <Container className={"mt-[12rem] text-[60px] font-bold"}>
        <h3 className={"p-6 text-[#7418D4] text-[40px]"}>Cronograma</h3>
        {MOCK_AGENDA.map((agendaCorrente, index) => {
            return (
            <Box className={"mb-4"}>
                <ScheduleCard key={index} informationCard={agendaCorrente} />
            </Box>
            );
        })}
        <SimpleCard />
        </Container>

    </>
    );
};

export default Page;
