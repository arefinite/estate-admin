import {
  CircleGauge,
  Landmark,
  LandPlot,
  Layers2,
  Layers3,
  Menu,
  Plus,
  Rss,
  Settings,
  Wrench,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { NavLink } from 'react-router-dom'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'

const AdminSideNav = () => {
  return (
    <nav>
      {/* for mobile menu */}
      <section className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left' className='w-full bg-muted'>
            <SheetHeader>
              <SheetDescription>
                <section className='bg-muted mt-8 p-4 '>
                  <ul className='space-y-4'>
                    <NavLink to='dashboard'>
                      <SheetClose asChild>
                        <li className='flex gap-2 items-center'>
                          <CircleGauge color='gray' size={20} />
                          Dashboard
                        </li>
                      </SheetClose>
                    </NavLink>

                    <Accordion type='single' collapsible className='space-y-4'>
                      <AccordionItem value='item-1'>
                        <AccordionTrigger>
                          <li className='flex gap-2 items-center'>
                            <LandPlot color='gray' size={20} />
                            Property Management
                          </li>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <NavLink to='add-property'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 py-4'>
                                  <Plus size={20} color='gray' />
                                  Add Property
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='manage-properties'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4'>
                                  <Wrench size={20} color='gray' />
                                  Manage Properties
                                </li>
                              </SheetClose>
                            </NavLink>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value='item-2'>
                        <AccordionTrigger>
                          <li className='flex gap-2 items-center'>
                            <Layers3 color='gray' size={20} />
                            Page Management
                          </li>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <NavLink to='about-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 py-4'>
                                  <Layers2 size={20} color='gray' />
                                  About Us Page
                                </li>
                              </SheetClose>
                            </NavLink>

                            <NavLink to='why-dubai-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Why Dubai Page
                                </li>
                              </SheetClose>
                            </NavLink>

                            <NavLink to='invest-in-dubai-real-estate-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Invest in Dubai Real-Estate Page
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='dubai-fact-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Dubai Fact Numbers Page
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='invest-in-off-plan-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Why Invest in Off Plan Page
                                </li>
                              </SheetClose>
                            </NavLink>

                            <NavLink to='guide-on-renting-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Guide on Renting Page
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='guide-to-selling-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 pb-4'>
                                  <Layers2 size={20} color='gray' />
                                  Guide to Selling Page
                                </li>
                              </SheetClose>
                            </NavLink>

                            <NavLink to='privacy-policy-page'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4'>
                                  <Layers2 size={20} color='gray' />
                                  Privacy & Policy Page
                                </li>
                              </SheetClose>
                            </NavLink>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value='item-3'>
                        <AccordionTrigger>
                          <li className='flex gap-2 items-center'>
                            <Rss color='gray' size={20} />
                            Blog Management
                          </li>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <NavLink to='add-blog'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 py-4'>
                                  <Plus size={20} color='gray' />
                                  Add Blogs
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='manage-blogs'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4'>
                                  <Wrench size={20} color='gray' />
                                  Manage Blogs
                                </li>
                              </SheetClose>
                            </NavLink>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value='item-4'>
                        <AccordionTrigger>
                          <li className='flex gap-2 items-center'>
                            <Landmark color='gray' size={20} />
                            Dubai Developers
                          </li>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <NavLink to='add-developer'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4 py-4'>
                                  <Plus size={20} color='gray' />
                                  Add Developer
                                </li>
                              </SheetClose>
                            </NavLink>
                            <NavLink to='manage-developers'>
                              <SheetClose asChild>
                                <li className='flex gap-2 items-center ml-4'>
                                  <Wrench size={20} color='gray' />
                                  Manage Developer
                                </li>
                              </SheetClose>
                            </NavLink>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <NavLink to='admin-settings'>
                      <SheetClose asChild>
                        <li className='flex gap-2 items-center py-4'>
                          <Settings color='gray' size={20} />
                          Admin Panel Settings
                        </li>
                      </SheetClose>
                    </NavLink>
                  </ul>
                </section>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>

      {/* for desktop and tablet menu */}
      <section className='bg-muted min-w-[290px]  p-4 hidden md:block'>
        <ul className='space-y-4'>
          <NavLink to='dashboard'>
            <li className='flex gap-2 items-center'>
              <CircleGauge color='gray' size={20} />
              Dashboard
            </li>
          </NavLink>

          <Accordion type='single' collapsible className='space-y-4'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <li className='flex gap-2 items-center'>
                  <LandPlot color='gray' size={20} />
                  Property Management
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <NavLink to='add-property'>
                    <li className='flex gap-2 items-center ml-4 py-4'>
                      <Plus size={20} color='gray' />
                      Add Property
                    </li>
                  </NavLink>
                  <NavLink to='manage-properties'>
                    <li className='flex gap-2 items-center ml-4'>
                      <Wrench size={20} color='gray' />
                      Manage Properties
                    </li>
                  </NavLink>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                <li className='flex gap-2 items-center'>
                  <Layers3 color='gray' size={20} />
                  Page Management
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <NavLink to='about-page'>
                    <li className='flex gap-2 items-center ml-4 py-4'>
                      <Layers2 size={20} color='gray' />
                      About Us Page
                    </li>
                  </NavLink>

                  <NavLink to='why-dubai-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Why Dubai Page
                    </li>
                  </NavLink>

                  <NavLink to='invest-in-dubai-real-estate-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Invest in Dubai Real-Estate Page
                    </li>
                  </NavLink>
                  <NavLink to='dubai-fact-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Dubai Fact Numbers Page
                    </li>
                  </NavLink>
                  <NavLink to='invest-in-off-plan-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Why Invest in Off Plan Page
                    </li>
                  </NavLink>

                  <NavLink to='guide-on-renting-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Guide on Renting Page
                    </li>
                  </NavLink>
                  <NavLink to='guide-to-selling-page'>
                    <li className='flex gap-2 items-center ml-4 pb-4'>
                      <Layers2 size={20} color='gray' />
                      Guide to Selling Page
                    </li>
                  </NavLink>

                  <NavLink to='privacy-policy-page'>
                    <li className='flex gap-2 items-center ml-4'>
                      <Layers2 size={20} color='gray' />
                      Privacy & Policy Page
                    </li>
                  </NavLink>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                <li className='flex gap-2 items-center'>
                  <Rss color='gray' size={20} />
                  Blog Management
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <NavLink to='add-blog'>
                    <li className='flex gap-2 items-center ml-4 py-4'>
                      <Plus size={20} color='gray' />
                      Add Blogs
                    </li>
                  </NavLink>
                  <NavLink to='manage-blogs'>
                    <li className='flex gap-2 items-center ml-4'>
                      <Wrench size={20} color='gray' />
                      Manage Blogs
                    </li>
                  </NavLink>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>
                <li className='flex gap-2 items-center'>
                  <Landmark color='gray' size={20} />
                  Dubai Developers
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <NavLink to='add-developer'>
                    <li className='flex gap-2 items-center ml-4 py-4'>
                      <Plus size={20} color='gray' />
                      Add Developer
                    </li>
                  </NavLink>
                  <NavLink to='manage-developers'>
                    <li className='flex gap-2 items-center ml-4'>
                      <Wrench size={20} color='gray' />
                      Manage Developers
                    </li>
                  </NavLink>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <NavLink to='admin-settings'>
            <li className='flex gap-2 items-center py-4'>
              <Settings color='gray' size={20} />
              Admin Panel Settings
            </li>
          </NavLink>
        </ul>
      </section>
    </nav>
  )
}
export default AdminSideNav
