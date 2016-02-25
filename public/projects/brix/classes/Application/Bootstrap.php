<?php
 namespace brix\Application;

 use Fewlines\Core\Application\Application;
 use Fewlines\Core\Locale\Locale;
 use Fewlines\Component\Navigation\Navigation;
 use Fewlines\Core\Application\Registry;

 class Bootstrap extends \Fewlines\Core\Application\Bootstrap
{
    function __construct(Application $app)
    {
        parent::__construct($app);

        Locale::set('de');
        $this->config->applyShortcuts();
    }

    public function initNavigation()
    {
        $navigation = new Navigation($this->config->getElementByPath('navigation'));
        Registry::set('navigation',$navigation);
    }
}