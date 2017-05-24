$(function () {

  var buttonGroups = $('.btn-group');
  var advancedSections = $('.advance-step');
  var installSection = $('#installSection');
  var selectedItems = Object.create(null);
  var installCodeElement = $('.stryker-install code');
  var strykerConfigureBuild = $('.stryker-configure-build code');
  var strykerConfigureStryker = $('.stryker-configure-stryker code');
  var strykerConfigureKarma = $('.stryker-configure-karma');
  var installTemplate = installCodeElement.text();
  var strykerConfigTemplate = strykerConfigureStryker.text();
  var buildSystemExamples = $('.stryker-configure-build');
  var reporterTexts = $('.stryker-reporter');
  var runExamples = $('.stryker-run');
  var alreadyScrolled = false;

  function scrollStep2() {
    if (!alreadyScrolled) {
      $('html, body').animate({
        scrollTop: installSection.offset().top - 50
      }, 500);
    }
    alreadyScrolled = true;
  }

  /**
   * Updates stryker config example code
   */
  function updateStrykerConfigExample() {
    var strykerConfExample = strykerConfigTemplate.replace('{{included}}', selectedItems['test-runner'] !== 'mocha');
    Object.keys(selectedItems).forEach(function (key) {
      strykerConfExample = strykerConfExample.replace('{{' + key + '}}', selectedItems[key]);
    });
    strykerConfigureStryker.text(strykerConfExample);
    if (selectedItems['test-runner'] === 'karma') {
      strykerConfigureKarma.show();
    } else {
      strykerConfigureKarma.hide();
    }
  }

  /**
   * Gets the plugin name for given key or ''
   */
  function getPlugin(key, group) {
    switch (key) {
      case 'grunt': return 'grunt-stryker';
      case 'html': return 'stryker-html-reporter';
      case 'mocha': return 'stryker-mocha-runner';
      case 'jasmine': return 'stryker-jasmine';
      case 'karma': return 'stryker-karma-runner';
      case 'jest': return 'stryker-jest-runner';
      default: return '';
    }
  }

  /**
   * Updates install example
   */
  function updateInstallExample() {
    var installExample = installTemplate;
    Object.keys(selectedItems).forEach(function (key) {
      var plugin = getPlugin(selectedItems[key], key);
      installExample = installExample.replace('{{' + key + '}}', (installExample.indexOf(plugin) < 0 ? plugin : ''));
    });
    installCodeElement.text(installExample);
  }


  /**
   * shows/hides correct build config example
   */
  function updateBuildConfigExample() {
    showBasedOnData(buildSystemExamples, 'build-system');
  }

  /**
   * shows/hides correct run example
   */
  function updateRunExample() {
    showBasedOnData(runExamples, 'build-system');
  }

  /**
   * hide/show report help text
   */
  function updateReportHelpText() {
    showBasedOnData(reporterTexts, 'reporter');
  }

  function showBasedOnData(elements, dataName) {
    elements.each(function () {
      var element = $(this);
      if (element.data(dataName) === selectedItems[dataName]) {
        element.show();
      } else {
        element.hide();
      }
    });
  }

  /**
   * Orchestrates the steps
   */
  function updateSteps() {
    if (Object.keys(selectedItems).length >= buttonGroups.length) {
      advancedSections.show();
      updateInstallExample();
      updateBuildConfigExample();
      updateStrykerConfigExample();
      updateReportHelpText();
      updateRunExample();
      scrollStep2();
    }
  }

  /**
   * For each button group on the quickstart page
   */
  buttonGroups.each(function () {
    var group = $(this);
    var btns = group.find('.btn');


    btns.on('click', function () {
      btns.each(function () {
        this.classList.remove('btn-primary');
        this.classList.add('btn-default');
      });
      selectedItems[group.data('group')] = $(this).data('name');
      this.classList.add('btn-primary');
      updateSteps();
    });
  });
});
