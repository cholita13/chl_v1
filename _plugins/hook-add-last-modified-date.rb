# https://stackoverflow.com/questions/36758072/how-to-insert-the-last-updated-time-stamp-in-jekyll-page-at-build-time
Jekyll::Hooks.register [:essays, :thinklist], :pre_render do |page|
    # get the current page last modified time
    modification_time = File.mtime( page.path )
  
    # inject modification_time in page's datas.
    page.data['last_modified_date'] = modification_time
end