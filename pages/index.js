import Layout from "../Components/Layout";
import {Box, Container, Typography, useMediaQuery} from "@mui/material";
import allBuildings from '../assets/all-developments.svg'
import residential from '../assets/residential.svg'
import commercial from '../assets/commercial.svg'
import SVG from "react-inlinesvg";
import Link from 'next/link'
import {AnimatePresence, motion} from "framer-motion";

const links = [
    {
        title: 'Mitigation measures for residential development',
        img: residential,
        link: './residential_buildings'
    },
    {
        title: 'Mitigation measures for other development',
        img: commercial,
        link: './commercial_buildings'
    },
    {
        title: 'Adaption measures for all development',
        img: allBuildings,
        link: './all_buildings'
    }
]

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1},
    exit: { opacity: 0 },
}

const Style = {
    p: 5,
    flex: 1,
    minWidth: 330,
    'svg': {
        filter: 'drop-shadow(3px 4px 4px rgba(0,0,0,0.2))',
        transition: '0.4s'
    },
    ':hover': {
        cursor: 'pointer',
        'svg': {
            filter: 'drop-shadow(3px 4px 8px rgba(0,0,0,0.5))'
        },
    }
}

export default function Home() {
    const lg = useMediaQuery('(max-width:700px)');
  return (
    <Layout>
        <Container>
            <AnimatePresence>
                <motion.div

                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'ease-in-out', duration: 1.2 }}
                >
            <Box sx={{ px: 2, py: 8 }}>
                <Typography textAlign='center' mb={2}>
                    This interactive toolkit will help applicants understand what is required to comply with Plymouth and South West Devon Climate Emergency Planning Statement (adopted October 2022).  A full pdf version is available to read on our 
                    <a href=" https://www.plymouth.gov.uk/climate-emergency-planning-policy-and-guidance"> climate emergency planning policy and guidance </a> page.

                </Typography>
                <Typography textAlign='center'mb={2}>
                    The requirements should be read alongside the policies in the Plymouth and South West Devon Joint Local Plan (JLP), such as policy DEV32 Delivering low carbon development, together with guidance in the Supplementary Planning Document (SPD).
                </Typography>
                <Typography textAlign='center'mb={2}>
                    The requirements are split into measures to reduce carbon emissions (Mitigation Measures) and measures to help us live with the impacts of climate change (Adaptation Measures).
                </Typography>
                <Typography textAlign='center'>
                    To view the requirements, please click on the images below.
                </Typography>
                <Typography textAlign='center'>
                    A link to the pdf version is also available on our 
                    <a href=" https://www.plymouth.gov.uk/climate-emergency-planning-policy-and-guidance"> climate emergency planning policy and guidance </a> page.
                </Typography>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexWrap: 'wrap'}}>
                {links.map(({title, text, img, link}) => (
                    <Link href={link} key={title}>
                        <Box sx={Style}>
                            <Typography sx={{ mb: 4, textAlign: 'center', minHeight: lg ? 0 : 70 }} variant={'h5'}>{title}</Typography>
                            <Box sx={{ width: '100%', m: 'auto', maxWidth: 330}}>
                                <SVG
                                    src={img.src}
                                    title={title}
                                    width={'100%'}
                                />
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>
                </motion.div>
            </AnimatePresence>
        </Container>
    </Layout>
  )
}
